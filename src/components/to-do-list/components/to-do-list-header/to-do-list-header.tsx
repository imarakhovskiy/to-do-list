import { memo } from "react";

import { ButtonBorder, ButtonProportion } from "components/ui-kit";
import { DoneAllCount, StyledHeader, StyledSearch } from "./styled";

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
      <DoneAllCount
        border={ButtonBorder.Light}
        proportions={ButtonProportion.Small}
      >
        <span>{String.fromCodePoint(0x2714)}</span>
        {doneItemsCount}/{allItemsCount}
      </DoneAllCount>
      <StyledSearch onSearch={onSearch} />
    </StyledHeader>
  );
};

const MemoizedComp = memo(ToDoListHeader);

export { MemoizedComp as ToDoListHeader };
