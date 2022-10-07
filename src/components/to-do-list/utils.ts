import {
  FiltersReducerAction,
  FiltersReducerActionType,
  ListFilter,
  SelectableToDoItem,
} from "./types";
import { FILTERS_INITIAL_STATE } from "./constants";

export const applyFilters = (
  toDoList: SelectableToDoItem[],
  filters: ListFilter
) => {
  const activeFilters = Object.values(filters).filter((f) => !!f);

  if (!activeFilters.length) {
    return toDoList;
  }

  return toDoList.filter((el) => activeFilters.every((filter) => filter(el)));
};

export function filtersReducer(
  state: ListFilter,
  action: FiltersReducerAction
) {
  switch (action.type) {
    case FiltersReducerActionType.SetNameFilter:
      const trimmedSearchString = action.payload?.searchString?.trim();

      return {
        ...state,
        name: trimmedSearchString
          ? (el: SelectableToDoItem) =>
              el.name.toLowerCase().includes(trimmedSearchString.toLowerCase())
          : undefined,
      };
    case FiltersReducerActionType.SetStatusFilter:
      const { isActiveStatusDone } = action.payload;

      return {
        ...state,
        status:
          isActiveStatusDone !== undefined
            ? (el: SelectableToDoItem) => el.done === isActiveStatusDone
            : undefined,
      };
    case FiltersReducerActionType.ClearAlFilters:
      return FILTERS_INITIAL_STATE;
    default:
      throw new Error();
  }
}
