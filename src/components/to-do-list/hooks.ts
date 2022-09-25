import { useCallback, useState } from "react";

import { DataListItem } from "types/list-types";
import { ToDoListItem } from "./types";
import { getUniqueId } from "utils/getUniqueId";

export const useToDoList = (data?: Omit<ToDoListItem, "id">[]) => {
  const [toDoItems, setToDoItems] = useState<ToDoListItem[]>(
    data?.map((el) => ({ ...el, id: getUniqueId() })) || []
  );

  const synchronizeLists = useCallback(
    (dndListCompInternalState: DataListItem[]) => {
      setToDoItems(() => dndListCompInternalState as ToDoListItem[]);
    },
    []
  );

  const addNewItem = useCallback((newToDoItemName: string) => {
    setToDoItems((oldToDoItems) => [
      { name: newToDoItemName, done: false, id: getUniqueId() },
      ...oldToDoItems,
    ]);
  }, []);

  const removeItems = useCallback((idsList: string[]) => {
    const toDelete = new Set(idsList);

    setToDoItems((oldToDoItems) =>
      oldToDoItems.filter((item) => !toDelete.has(item.id))
    );
  }, []);

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
    toDoItems,
    synchronizeLists,
    addNewItem,
    removeItems,
    updateItemsState,
  };
};
