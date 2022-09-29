import { ListFilter, ToDoListItem } from "./types";

export const applyFilters = (toDoList: ToDoListItem[], filters: ListFilter) => {
  const activeFilters = Object.values(filters).filter((f) => !!f);

  if (!activeFilters.length) {
    return toDoList;
  }

  return toDoList.filter((el) => activeFilters.every((filter) => filter(el)));
};
