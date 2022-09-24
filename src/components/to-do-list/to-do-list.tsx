import { useState, useCallback } from "react";

import { getUniqueId } from "utils/getUniqueId";
import { ToDoItem } from "./components";
import { StyledAddToDoItem, StyledCard, StyledToDoList } from "./styled";

interface ListItem {
  id: string;
  name: string;
}

interface ToDoListProps {
  className?: string;
  data?: Omit<ListItem, "id">[];
}

export const ToDoList = ({ className, data }: ToDoListProps) => {
  const [toDoItems, setToDoItem] = useState<ListItem[]>(
    data?.map((el) => ({ ...el, id: getUniqueId() })) || []
  );

  const onAddNewItem = useCallback((newToDoItemName: string) => {
    setToDoItem((oldToDoItems) => [
      { name: newToDoItemName, id: getUniqueId() },
      ...oldToDoItems,
    ]);
  }, []);

  return (
    <StyledCard className={className}>
      <StyledToDoList data={toDoItems} isItemsDraggable>
        {(data) => (
          <ToDoItem name={(data as ListItem).name} onDelete={() => {}} />
        )}
      </StyledToDoList>
      <StyledAddToDoItem onValueSubmit={onAddNewItem} />
    </StyledCard>
  );
};
