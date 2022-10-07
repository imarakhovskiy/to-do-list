import { memo, useCallback } from "react";

import { SelectableToDoItem, ToDoListItemId } from "../../types";
import { CheckboxProportion, CheckboxShape } from "components/ui-kit";
import { StyledCheckbox, ToDoItemDescription } from "./styled";
import { SELECTED_FIELD_NAME } from "components/to-do-list/constants";

interface ToDoItemGroupEditModeProps {
  itemData: SelectableToDoItem;
  selectItems: (idsList: ToDoListItemId[]) => void;
  unselectItems: (idsList: ToDoListItemId[]) => void;
}

const ToDoItemGroupEditMode = ({
  itemData,
  selectItems,
  unselectItems,
}: ToDoItemGroupEditModeProps) => {
  const onCheckboxValueChange = useCallback(
    (newValue: boolean) => {
      newValue ? selectItems([itemData.id]) : unselectItems([itemData.id]);
    },
    [itemData.id, selectItems, unselectItems]
  );

  return (
    <StyledCheckbox
      checked={itemData[SELECTED_FIELD_NAME]}
      label={
        <ToDoItemDescription title={itemData.name}>
          {itemData.name}
        </ToDoItemDescription>
      }
      shape={CheckboxShape.Circle}
      proportions={CheckboxProportion.Large}
      onChange={onCheckboxValueChange}
    />
  );
};

const MemoizedComp = memo(ToDoItemGroupEditMode);

export { MemoizedComp as ToDoItemGroupEditMode };
