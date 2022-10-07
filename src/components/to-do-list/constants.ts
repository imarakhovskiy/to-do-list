import { ListFilter } from "./types";

export const FILTERS_INITIAL_STATE: ListFilter = {
  name: undefined,
  status: undefined,
};

export const SELECTED_FIELD_NAME = Symbol("selected_field_name");

export const OPEN_GROUP_EDIT_LIST_ITEM_PRESS_MS = 700;
