import { memo, useCallback } from "react";

import { ToDoListItem } from "../../types";
import {
  ButtonBorder,
  ButtonProportion,
  ButtonShadow,
  ButtonVariant,
  IconDelete,
  IconVariant,
} from "components/ui-kit";
import {
  DeleteToDoItemButton,
  StyledToDoItem,
  ToDoItemDescription,
} from "./styled";
import { strings } from "./strings";

interface ToDoItemProps {
  itemData: ToDoListItem;
  removeItems?: (idsList: string[]) => void;
}

const ToDoItem = ({ itemData, removeItems }: ToDoItemProps) => {
  const deteleItem = useCallback(() => {
    if (!removeItems) {
      return;
    }

    removeItems([itemData.id]);
  }, [itemData.id, removeItems]);

  return (
    <StyledToDoItem>
      <ToDoItemDescription title={itemData.name}>
        {itemData.name}
      </ToDoItemDescription>
      {removeItems && (
        <DeleteToDoItemButton
          onClick={deteleItem}
          title={strings.deleteItemTitle}
          border={ButtonBorder.Light}
          shadow={ButtonShadow.Default}
          proportions={ButtonProportion.Small}
          variant={ButtonVariant.Error}
        >
          <IconDelete variant={IconVariant.Error} />
        </DeleteToDoItemButton>
      )}
    </StyledToDoItem>
  );
};

const MemoizedComp = memo(ToDoItem);

export { MemoizedComp as ToDoItem };
