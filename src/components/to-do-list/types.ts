import { ToDoItem } from "./helpers/to-do-item";
import { SELECTED_FIELD_NAME } from "./constants";

export type ToDoListItemId = string;

export interface ToDoListInputItem {
  name: string;
  done?: boolean;
}

export type SelectableToDoItem = ToDoItem & { [SELECTED_FIELD_NAME]: boolean };

export type FilterFunction = (element: SelectableToDoItem) => boolean;

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
