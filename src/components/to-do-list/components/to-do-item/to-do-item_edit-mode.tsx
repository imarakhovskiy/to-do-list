import { memo, useCallback, useEffect, useRef } from "react";

import { SelectableToDoItem, ToDoListItemId, ToDoListMode } from "../../types";
import {
  ButtonBorder,
  ButtonProportion,
  ButtonShadow,
  ButtonVariant,
  CheckboxProportion,
  CheckboxShape,
  IconDelete,
  IconVariant,
} from "components/ui-kit";
import { useMode } from "components/to-do-list/providers/mode-provider";
import {
  DeleteToDoItemButton,
  StyledCheckbox,
  StyledToDoItem,
  ToDoItemDescription,
} from "./styled";
import { OPEN_GROUP_EDIT_LIST_ITEM_PRESS_MS } from "../../constants";
import { strings } from "./strings";

interface ToDoItemEditModeProps {
  itemData: SelectableToDoItem;
  removeItems: (idsList: ToDoListItemId[]) => void;
  selectItems: (idsList: ToDoListItemId[]) => void;
  markItemsAsDone: (idsList: ToDoListItemId[]) => void;
  undoItems: (idsList: ToDoListItemId[]) => void;
}

const ToDoItemEditMode = ({
  itemData,
  removeItems,
  selectItems,
  markItemsAsDone,
  undoItems,
}: ToDoItemEditModeProps) => {
  const { changeMode } = useMode();
  const timeoutId = useRef<NodeJS.Timeout>();

  const deteleItem = () => {
    removeItems([itemData.id]);
  };

  const onMouseHoldedDown = () => {
    changeMode(ToDoListMode.GroupEdit);
    selectItems([itemData.id]);
  };

  const onMouseDown = () => {
    timeoutId.current = setTimeout(
      onMouseHoldedDown,
      OPEN_GROUP_EDIT_LIST_ITEM_PRESS_MS
    );
  };

  const preventGroupEditModeOpen = useCallback(() => {
    if (!timeoutId.current) {
      return;
    }

    clearInterval(timeoutId.current);
  }, []);

  const onCheckboxValueChange = useCallback(
    (newValue: boolean) => {
      newValue ? markItemsAsDone([itemData.id]) : undoItems([itemData.id]);
    },
    [itemData.id, undoItems, markItemsAsDone]
  );

  useEffect(() => {
    return preventGroupEditModeOpen;
  }, [preventGroupEditModeOpen]);

  return (
    <StyledToDoItem
      onMouseDown={onMouseDown}
      onMouseUp={preventGroupEditModeOpen}
      onMouseLeave={preventGroupEditModeOpen}
    >
      <StyledCheckbox
        checked={itemData.done}
        label={
          <ToDoItemDescription title={itemData.name}>
            {itemData.name}
          </ToDoItemDescription>
        }
        shape={CheckboxShape.Circle}
        proportions={CheckboxProportion.Large}
        onChange={onCheckboxValueChange}
      />
      <DeleteToDoItemButton
        onClick={deteleItem}
        icon={<IconDelete variant={IconVariant.Error} />}
        title={strings.deleteItemTitle}
        border={ButtonBorder.Light}
        shadow={ButtonShadow.Default}
        proportions={ButtonProportion.Small}
        variant={ButtonVariant.Error}
      />
    </StyledToDoItem>
  );
};

const MemoizedComp = memo(ToDoItemEditMode);

export { MemoizedComp as ToDoItemEditMode };
