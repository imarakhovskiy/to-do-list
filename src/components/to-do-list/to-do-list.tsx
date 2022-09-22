import { StyledCard, StyledList } from "./styled";

interface ListItem {
  id: string;
  name: string;
}

interface ToDoListProps {}

export const FRIENDS = Array(15)
  .fill(null)
  .map((_, index) => ({
    id: `${index}`,
    name: `Andrew ${index}`,
  }));

export const ToDoList = ({}: ToDoListProps) => {
  return (
    <StyledCard>
      <StyledList data={FRIENDS} isItemsDraggable>
        {(data) => <p>{(data as ListItem).name}</p>}
      </StyledList>
    </StyledCard>
  );
};
