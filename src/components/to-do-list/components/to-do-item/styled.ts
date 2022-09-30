import styled from "styled-components";

import { Button, Checkbox } from "components/ui-kit";

export const StyledToDoItem = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCheckbox = styled(Checkbox)`
  flex-grow: 2;
  flex-shrink: 2;
  overflow: hidden;
`;

export const ToDoItemDescription = styled.p`
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 0 15px;
`;

export const DeleteToDoItemButton = styled(Button)`
  padding: 4px;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: content;
`;
