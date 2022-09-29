export interface ToDoListItem {
  id: string;
  name: string;
  done: boolean;
}

export type FilterFunction = (element: ToDoListItem) => boolean;

export interface ListFilter {
  name?: FilterFunction;
  state?: FilterFunction;
}
