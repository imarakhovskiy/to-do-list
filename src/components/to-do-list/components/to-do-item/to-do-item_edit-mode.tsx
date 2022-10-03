import { memo, useCallback, useEffect, useRef } from "react";

import { ToDoListItem, ToDoListMode } from "../../types";
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
  itemData: ToDoListItem;
  removeItems: (idsList: string[]) => void;
  updateItemsStatus: (
    idsList: string[],
    newState: boolean,
    fieldName: keyof ToDoListItem
  ) => void;
}

const ToDoItemEditMode = ({
  itemData,
  removeItems,
  updateItemsStatus,
}: ToDoItemEditModeProps) => {
  const { changeMode } = useMode();
  const timeoutId = useRef<NodeJS.Timeout>();

  const deteleItem = () => {
    removeItems([itemData.id]);
  };

  const updateItemStatus =
    (fieldName: keyof ToDoListItem) => (newValue: boolean) => {
      updateItemsStatus([itemData.id], newValue, fieldName);
    };

  const onMouseHoldedDown = () => {
    changeMode(ToDoListMode.GroupEdit);
    updateItemStatus("selected")(true);
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
        onChange={updateItemStatus("done")}
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
