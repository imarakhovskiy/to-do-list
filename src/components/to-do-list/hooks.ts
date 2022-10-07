import { useCallback, useEffect, useMemo, useReducer, useState } from "react";

import {
  FiltersReducerActionType,
  SelectableToDoItem,
  ToDoListMode,
} from "./types";
import { applyFilters, filtersReducer } from "./utils";
import { FILTERS_INITIAL_STATE } from "./constants";

export const useToDoList = (toDoItems: SelectableToDoItem[]) => {
  const [mode, setMode] = useState(ToDoListMode.Edit);

  const [itemsToDisplay, setItemsToDisplay] =
    useState<SelectableToDoItem[]>(toDoItems);

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

  // Change To Do list mode
  const changeMode = useCallback((newModeValue: ToDoListMode) => {
    setMode(() => newModeValue);
  }, []);

  return {
    mode,
    itemsToDisplay,
    doneItemsCount,
    changeMode,
    searchItems,
    updateStatusFilter,
  };
};
