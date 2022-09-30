import {
  StyledHeader,
  StyledToDoItemStatusFilter,
  StyledSearchToDoItem,
} from "./styled";

interface ToDoListHeaderProps {
  doneItemsCount: number;
  allItemsCount: number;
  className?: string;
  onSearch: (newSearchString: string) => void;
  removeItems?: (idsList: string[]) => void;
  updateItemsState?: (idsList: string[], newState: boolean) => void;
  updateStatusFilter: (isActiveStatusDone: boolean | undefined) => void;
}

export const ToDoListHeader = ({
  doneItemsCount,
  allItemsCount,
  className,
  onSearch,
  updateStatusFilter,
}: ToDoListHeaderProps) => {
  return (
    <StyledHeader className={className}>
      <StyledToDoItemStatusFilter
        doneItemsCount={doneItemsCount}
        allItemsCount={allItemsCount}
        updateStatusFilter={updateStatusFilter}
      />
      <StyledSearchToDoItem onSearch={onSearch} />
    </StyledHeader>
  );
};
