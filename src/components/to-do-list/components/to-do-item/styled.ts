import styled from "styled-components";

import { Button } from "components/ui-kit";

export const StyledToDoItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ToDoItemDescription = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex-grow: 2;
  padding: 0 15px;
`;

export const DeleteToDoItemButton = styled(Button)`
  padding: 4px;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: content;
  background-color: unset;
`;
