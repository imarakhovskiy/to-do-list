import { memo } from "react";

import { ToDoListItem } from "../../types";
import { CheckboxProportion, CheckboxShape } from "components/ui-kit";
import { StyledCheckbox, ToDoItemDescription } from "./styled";

interface ToDoItemGroupEditModeProps {
  itemData: ToDoListItem;
  updateItemsStatus: (
    idsList: string[],
    newState: boolean,
    fieldName: keyof ToDoListItem
  ) => void;
}

const ToDoItemGroupEditMode = ({
  itemData,
  updateItemsStatus,
}: ToDoItemGroupEditModeProps) => {
  const updateItemStatus = (newValue: boolean) => {
    updateItemsStatus([itemData.id], newValue, "selected");
  };

  return (
    <StyledCheckbox
      checked={itemData.selected}
      label={
        <ToDoItemDescription title={itemData.name}>
          {itemData.name}
        </ToDoItemDescription>
      }
      shape={CheckboxShape.Circle}
      proportions={CheckboxProportion.Large}
      onChange={updateItemStatus}
    />
  );
};

const MemoizedComp = memo(ToDoItemGroupEditMode);

export { MemoizedComp as ToDoItemGroupEditMode };
