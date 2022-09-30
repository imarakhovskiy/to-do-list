export interface ToDoListItem {
  id: string;
  name: string;
  done: boolean;
  selected: boolean;
}

export type FilterFunction = (element: ToDoListItem) => boolean;

export interface ListFilter {
  name?: FilterFunction;
  status?: FilterFunction;
}

export interface FiltersReducerAction {
  type: FiltersReducerActionType;
  payload: FiltersReducerActionPayload;
}

export enum FiltersReducerActionType {
  SetStatusFilter = "SET_STATUS_FILTER",
  SetNameFilter = "SET_NAME_FILTER",
  ClearAlFilters = "CLEAR_ALL_FILTERS",
}

interface FiltersReducerActionPayload {
  searchString?: string;
  isActiveStatusDone?: boolean;
}

export enum ToDoListMode {
  Edit = "edit",
  GroupEdit = "group_edit",
}
