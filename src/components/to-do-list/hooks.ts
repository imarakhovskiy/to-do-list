import { useCallback, useEffect, useMemo, useReducer, useState } from "react";

import { DataListItem } from "types/list-types";
import { FiltersReducerActionType, ToDoListItem, ToDoListMode } from "./types";
import { getUniqueId } from "utils/getUniqueId";
import { applyFilters, filtersReducer } from "./utils";
import { FILTERS_INITIAL_STATE } from "./constants";

export const useToDoList = (data?: Omit<ToDoListItem, "id" | "selected">[]) => {
  const [mode, setMode] = useState(ToDoListMode.Edit);

  const [toDoItems, setToDoItems] = useState<ToDoListItem[]>(
    data?.map((el) => ({ ...el, id: getUniqueId(), selected: false })) || []
  );
  const [itemsToDisplay, setItemsToDisplay] =
    useState<ToDoListItem[]>(toDoItems);

  const [activeFilters, dispatchActiveFilters] = useReducer(
    filtersReducer,
    FILTERS_INITIAL_STATE
  );

  useEffect(() => {
    setItemsToDisplay(applyFilters(toDoItems, activeFilters));
  }, [toDoItems, activeFilters]);

  const doneItemsCount = useMemo(() => {
    const count = toDoItems.reduce((accum, el) => accum + Number(el.done), 0);

    return count;
  }, [toDoItems]);

  const selectedItemsIds = useMemo(() => {
    if (mode !== ToDoListMode.GroupEdit) {
      return;
    }

    return toDoItems.reduce((accum, el) => {
      if (el.selected) {
        accum.push(el.id);
      }

      return accum;
    }, [] as string[]);
  }, [mode, toDoItems]);

  // Synchronize ToDoList state array with List component after DnD actions
  const synchronizeLists = useCallback(
    (dndListCompInternalState: DataListItem[]) => {
      setToDoItems(() => dndListCompInternalState as ToDoListItem[]);
    },
    []
  );

  // Adding new items in To Do list
  const addNewItem = useCallback((newToDoItemName: string) => {
    setToDoItems((oldToDoItems) => [
      {
        name: newToDoItemName,
        done: false,
        id: getUniqueId(),
        selected: false,
      },
      ...oldToDoItems,
    ]);
  }, []);

  // Remove items from To Do list by their id's array
  const removeItems = useCallback((idsList: string[]) => {
    const toDelete = new Set(idsList);

    setToDoItems((oldToDoItems) =>
      oldToDoItems.filter((item) => !toDelete.has(item.id))
    );
  }, []);

  // Search to do items by specific name
  const searchItems = useCallback((searchString: string) => {
    dispatchActiveFilters({
      type: FiltersReducerActionType.SetNameFilter,
      payload: { searchString },
    });
  }, []);

  // Show Done/Undone/All items on such option select
  const updateStatusFilter = useCallback(
    (isActiveStatusDone: boolean | undefined) => {
      dispatchActiveFilters({
        type: FiltersReducerActionType.SetStatusFilter,
        payload: { isActiveStatusDone },
      });
    },
    []
  );

  // Do/Undo or Select/Unselect items by id's
  const updateItemsStatus = useCallback(
    (
      idsList: string[],
      newStatusValue: boolean,
      fieldName: keyof ToDoListItem
    ) => {
      const toUpdate = new Set(idsList);

      setToDoItems((oldToDoItems) => {
        const updatedToDoItemsList = oldToDoItems.map((item) => {
          if (toUpdate.has(item.id)) {
            return { ...item, [fieldName]: newStatusValue };
          }

          return item;
        });

        return updatedToDoItemsList;
      });
    },
    []
  );

  // Change To Do list mode
  const changeMode = useCallback((newModeValue: ToDoListMode) => {
    setMode(() => newModeValue);
  }, []);

  return {
    mode,
    toDoItems,
    itemsToDisplay,
    doneItemsCount,
    selectedItemsIds,
    changeMode,
    addNewItem,
    removeItems,
    searchItems,
    synchronizeLists,
    updateItemsStatus,
    updateStatusFilter,
  };
};
