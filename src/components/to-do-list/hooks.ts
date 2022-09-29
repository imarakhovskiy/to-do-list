import { useCallback, useEffect, useMemo, useReducer, useState } from "react";

import { DataListItem } from "types/list-types";
import {
  FiltersReducerAction,
  FiltersReducerActionType,
  ListFilter,
  ToDoListItem,
} from "./types";
import { getUniqueId } from "utils/getUniqueId";
import { applyFilters } from "./utils";

const FILTERS_INITIAL_STATE: ListFilter = {
  name: undefined,
  status: undefined,
};

function filtersReducer(state: ListFilter, action: FiltersReducerAction) {
  switch (action.type) {
    case FiltersReducerActionType.SetNameFilter:
      const trimmedSearchString = action.payload?.searchString?.trim();

      return {
        ...state,
        name: trimmedSearchString
          ? (el: ToDoListItem) =>
              el.name.toLowerCase().includes(trimmedSearchString.toLowerCase())
          : undefined,
      };
    case FiltersReducerActionType.SetStatusFilter:
      const { isActiveStatusDone } = action.payload;

      return {
        ...state,
        status:
          isActiveStatusDone !== undefined
            ? (el: ToDoListItem) => el.done === isActiveStatusDone
            : undefined,
      };
    case FiltersReducerActionType.ClearAlFilters:
      return FILTERS_INITIAL_STATE;
    default:
      throw new Error();
  }
}

export const useToDoList = (data?: Omit<ToDoListItem, "id">[]) => {
  const [toDoItems, setToDoItems] = useState<ToDoListItem[]>(
    data?.map((el) => ({ ...el, id: getUniqueId() })) || []
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
      { name: newToDoItemName, done: false, id: getUniqueId() },
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

  const updateStatusFilter = useCallback(
    (isActiveStatusDone: boolean | undefined) => {
      dispatchActiveFilters({
        type: FiltersReducerActionType.SetStatusFilter,
        payload: { isActiveStatusDone },
      });
    },
    []
  );

  // Do/Undo items
  const updateItemsStatus = useCallback(
    (idsList: string[], newStatusValue: boolean) => {
      const toUpdate = new Set(idsList);

      setToDoItems((oldToDoItems) => {
        const updatedToDoItemsList = oldToDoItems.map((item) => {
          if (toUpdate.has(item.id)) {
            return { ...item, done: newStatusValue };
          }

          return item;
        });

        return updatedToDoItemsList;
      });
    },
    []
  );

  return {
    itemsToDisplay,
    toDoItems,
    doneItemsCount,
    addNewItem,
    removeItems,
    searchItems,
    synchronizeLists,
    updateItemsStatus,
    updateStatusFilter,
  };
};
