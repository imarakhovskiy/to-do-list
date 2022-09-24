import React, { useCallback, useState } from "react";

import { IconPlus } from "components/ui-kit";
import {
  AddToDoItemWrapper,
  NewToDoItemNameInput,
  AddToDoItemButton,
} from "./styled";
import { strings } from "../../strings";

interface AddToDoItemProps {
  className?: string;
  onValueSubmit?: (value: string) => void;
}

export const AddToDoItem = ({ className, onValueSubmit }: AddToDoItemProps) => {
  const [newToDoItemName, setNewToDoItemName] = useState("");

  const onNewToDoItemNameChange = useCallback((value: string) => {
    setNewToDoItemName(() => value);
  }, []);

  const submitNewToDoItemName = useCallback(() => {
    setNewToDoItemName((toDoItemName) => {
      const trimmedNewToDoItemName = toDoItemName.trim(); // Checking input for empty value
      if (trimmedNewToDoItemName && onValueSubmit) {
        onValueSubmit(trimmedNewToDoItemName);
      }

      return ""; // Clearing input on submitting value
    });
  }, [onValueSubmit]);

  const onInputKeyUp: React.KeyboardEventHandler = useCallback(
    (e) => {
      if (e.key === "Enter") {
        submitNewToDoItemName();
      }
    },
    [submitNewToDoItemName]
  );

  return (
    <AddToDoItemWrapper className={className}>
      <NewToDoItemNameInput
        value={newToDoItemName}
        onChange={onNewToDoItemNameChange}
        onKeyUp={onInputKeyUp}
      />
      <AddToDoItemButton title={strings.addToDoItem}>
        <IconPlus />
      </AddToDoItemButton>
    </AddToDoItemWrapper>
  );
};
