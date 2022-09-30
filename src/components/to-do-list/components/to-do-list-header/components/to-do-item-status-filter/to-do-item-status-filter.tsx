import { useState } from "react";

import {
  ButtonBorder,
  ButtonProportion,
  ButtonVariant,
  IconDone,
  IconInProgress,
  IconVariant,
} from "components/ui-kit";
import {
  FilterIconWrapper,
  StatusFilterButton,
  StatusFiltersWrapper,
} from "./styled";

interface ToDoItemStatusFilterProps {
  className?: string;
  allItemsCount: number;
  doneItemsCount: number;
  updateStatusFilter: (isActiveStatusDone: boolean | undefined) => void;
}

export const ToDoItemStatusFilter = ({
  className,
  allItemsCount,
  doneItemsCount,
  updateStatusFilter,
}: ToDoItemStatusFilterProps) => {
  const [activeFilter, setActiveFilter] = useState<boolean>();

  const onClick = (filterValue: boolean) => {
    return () =>
      setActiveFilter((oldActiveFilter) => {
        const newActiveFilter =
          oldActiveFilter === filterValue ? undefined : filterValue;

        updateStatusFilter(newActiveFilter);

        return newActiveFilter;
      });
  };

  return (
    <StatusFiltersWrapper className={className}>
      <StatusFilterButton
        border={ButtonBorder.Light}
        proportions={ButtonProportion.Small}
        variant={
          activeFilter === true
            ? ButtonVariant.Secondary
            : ButtonVariant.Primary
        }
        onClick={onClick(true)}
      >
        <FilterIconWrapper>
          <IconDone variant={IconVariant.Success} />
        </FilterIconWrapper>
        {doneItemsCount}/{allItemsCount}
      </StatusFilterButton>
      <StatusFilterButton
        border={ButtonBorder.Light}
        proportions={ButtonProportion.Small}
        variant={
          activeFilter === false
            ? ButtonVariant.Secondary
            : ButtonVariant.Primary
        }
        onClick={onClick(false)}
      >
        <FilterIconWrapper>
          <IconInProgress variant={IconVariant.Warning} />
        </FilterIconWrapper>
        {allItemsCount - doneItemsCount}/{allItemsCount}
      </StatusFilterButton>
    </StatusFiltersWrapper>
  );
};
