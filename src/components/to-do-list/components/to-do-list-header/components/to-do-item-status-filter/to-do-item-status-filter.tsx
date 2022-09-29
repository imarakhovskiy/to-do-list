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
  allItemsCount: number;
  doneItemsCount: number;
  updateStatusFilter: (isActiveStatusDone: boolean | undefined) => void;
}

export const ToDoItemStatusFilter = ({
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
    <StatusFiltersWrapper>
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
