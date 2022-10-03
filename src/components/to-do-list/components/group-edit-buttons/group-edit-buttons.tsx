import { memo } from "react";

import { ToDoListItem, ToDoListMode } from "components/to-do-list/types";
import {
  ButtonShadow,
  ButtonVariant,
  IconCancel,
  IconDelete,
  IconDone,
  IconInProgress,
} from "components/ui-kit";
import { useMode } from "components/to-do-list/providers/mode-provider";
import {
  StyledGroupEditButton,
  CancelButton,
  ActionButtonsWrapper,
  Wrapper,
} from "./styled";
import { strings } from "components/to-do-list/strings";

interface GroupEditButtonsProps {
  selectedItemsIds: string[];
  removeItems: (idsList: string[]) => void;
  updateItemsStatus: (
    idsList: string[],
    newState: boolean,
    fieldName: keyof ToDoListItem
  ) => void;
}

const GroupEditButtons = ({
  selectedItemsIds,
  removeItems,
  updateItemsStatus,
}: GroupEditButtonsProps) => {
  const { changeMode } = useMode();

  const exitFromGroupEditMode = () => {
    changeMode(ToDoListMode.Edit);
    updateItemsStatus(selectedItemsIds, false, "selected");
  };

  const updateSelectedItemsStatus = (newValue: boolean) => () => {
    updateItemsStatus(selectedItemsIds, newValue, "done");
    exitFromGroupEditMode();
  };

  const deleteSelectedItems = () => {
    removeItems(selectedItemsIds);
    changeMode(ToDoListMode.Edit);
  };

  return (
    <Wrapper>
      <ActionButtonsWrapper>
        <StyledGroupEditButton
          title={strings.groupEdit.delete.title}
          variant={ButtonVariant.Error}
          shadow={ButtonShadow.Default}
          onClick={deleteSelectedItems}
        >
          {strings.groupEdit.delete.name}
          <IconDelete />
        </StyledGroupEditButton>
        <StyledGroupEditButton
          title={strings.groupEdit.undone.title}
          variant={ButtonVariant.Primary}
          shadow={ButtonShadow.Default}
          onClick={updateSelectedItemsStatus(false)}
        >
          {strings.groupEdit.undone.name}
          <IconInProgress />
        </StyledGroupEditButton>
        <StyledGroupEditButton
          title={strings.groupEdit.done.title}
          variant={ButtonVariant.Success}
          shadow={ButtonShadow.Default}
          onClick={updateSelectedItemsStatus(true)}
        >
          {strings.groupEdit.done.name}
          <IconDone />
        </StyledGroupEditButton>
      </ActionButtonsWrapper>
      <CancelButton
        title={strings.groupEdit.cancel.title}
        variant={ButtonVariant.Secondary}
        onClick={exitFromGroupEditMode}
      >
        {strings.groupEdit.cancel.name}
        <IconCancel />
      </CancelButton>
    </Wrapper>
  );
};

const MemoizedComp = memo(GroupEditButtons);

export { MemoizedComp as GroupEditButtons };
