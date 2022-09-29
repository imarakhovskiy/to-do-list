import { useCallback, useEffect, useMemo, useState } from "react";

import { DataListItem } from "types/list-types";
import { ListFilter, ToDoListItem } from "./types";
import { getUniqueId } from "utils/getUniqueId";
import { applyFilters } from "./utils";

const FILTERS_INITIAL_VALUE: ListFilter = {
  name: undefined,
  state: undefined,
};

export const useToDoList = (data?: Omit<ToDoListItem, "id">[]) => {
  const [toDoItems, setToDoItems] = useState<ToDoListItem[]>(
    data?.map((el) => ({ ...el, id: getUniqueId() })) || []
  );
  const [activeFilters, setActiveFilter] = useState<ListFilter>(
    FILTERS_INITIAL_VALUE
  );
  const [itemsToDisplay, setItemsToDisplay] =
    useState<ToDoListItem[]>(toDoItems);

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
    setActiveFilter((prevActiveFilter) => {
      const trimmedSearchString = searchString.trim();
      return {
        ...prevActiveFilter,
        name: trimmedSearchString
          ? (el: ToDoListItem) =>
              el.name.toLowerCase().includes(trimmedSearchString.toLowerCase())
          : undefined,
      };
    });
  }, []);

  // Do/Undo items
  const updateItemsState = useCallback(
    (idsList: string[], newStateValue: boolean) => {
      const toUpdate = new Set(idsList);

      setToDoItems((oldToDoItems) => {
        const updatedToDoItemsList = oldToDoItems.map((item) => {
          if (toUpdate.has(item.id)) {
            return { ...item, done: newStateValue };
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
    synchronizeLists,
    addNewItem,
    removeItems,
    updateItemsState,
    searchItems,
  };
};
