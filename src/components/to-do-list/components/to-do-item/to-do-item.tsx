import {
  ButtonBorder,
  ButtonProportion,
  ButtonShadow,
  ButtonShape,
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
  name?: string;
  onDelete?: () => void;
}

export const ToDoItem = ({ name, onDelete }: ToDoItemProps) => {
  return (
    <StyledToDoItem>
      <ToDoItemDescription title={name}>{name}</ToDoItemDescription>
      {onDelete && (
        <DeleteToDoItemButton
          onClick={onDelete}
          title={strings.deleteItemTitle}
          border={ButtonBorder.Light}
          shadow={ButtonShadow.Default}
          shape={ButtonShape.Circle}
          proportions={ButtonProportion.Small}
          variant={ButtonVariant.Error}
        >
          <IconDelete variant={IconVariant.Error} />
        </DeleteToDoItemButton>
      )}
    </StyledToDoItem>
  );
};
