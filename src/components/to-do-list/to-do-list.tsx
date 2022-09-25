import { useCallback } from "react";

import { ToDoListItem } from "./types";
import { useToDoList } from "./hooks";
import { ToDoItem } from "./components";
import { StyledAddToDoItem, StyledCard, StyledToDoList } from "./styled";

interface ToDoListProps {
  className?: string;
  data?: Omit<ToDoListItem, "id">[];
}

export const ToDoList = ({ className, data }: ToDoListProps) => {
  const { toDoItems, synchronizeLists, addNewItem, removeItems } =
    useToDoList(data);

  console.log("ToDoList Rerender");

  const renderToDoListItems = useCallback(
    (data: unknown) => (
      <ToDoItem itemData={data as ToDoListItem} removeItems={removeItems} />
    ),
    [removeItems]
  );

  return (
    <StyledCard className={className}>
      <StyledToDoList
        data={toDoItems}
        onListItemsOrderChange={synchronizeLists}
        isItemsDraggable
      >
        {renderToDoListItems}
      </StyledToDoList>
      <StyledAddToDoItem onValueSubmit={addNewItem} />
    </StyledCard>
  );
};
