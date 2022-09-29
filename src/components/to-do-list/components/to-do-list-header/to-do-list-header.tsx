import { memo } from "react";

import { DoneAllCount, StyledHeader, StyledSearch } from "./styled";
import { strings } from "../../strings";

interface ToDoListHeaderProps {
  doneItemsCount: number;
  allItemsCount: number;
  className?: string;
  onSearch: (newSearchString: string) => void;
  removeItems?: (idsList: string[]) => void;
  updateItemsState?: (idsList: string[], newState: boolean) => void;
}

const ToDoListHeader = ({
  doneItemsCount,
  allItemsCount,
  className,
  onSearch,
  removeItems,
  updateItemsState,
}: ToDoListHeaderProps) => {
  return (
    <StyledHeader className={className}>
      <DoneAllCount>
        <span>{strings.done}</span>
        {doneItemsCount}/{allItemsCount}
      </DoneAllCount>
      <StyledSearch onSearch={onSearch} />
    </StyledHeader>
  );
};

const MemoizedComp = memo(ToDoListHeader);

export { MemoizedComp as ToDoListHeader };
