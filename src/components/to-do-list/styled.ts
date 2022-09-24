import styled from "styled-components";

import { Card, List, ListItem } from "components/ui-kit";
import { AddToDoItem } from "./components";

export const StyledCard = styled(Card)`
  display: flex;
  max-height: 450px;
  padding: 4px;
  overflow-y: auto;
`;

export const StyledToDoList = styled(List)`
  ${ListItem} {
    padding: 4px;
    border-radius: 7px;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.borderColor.primary};

    &:not(:last-child) {
      margin-bottom: 3px;
    }
  }
`;

export const StyledAddToDoItem = styled(AddToDoItem)`
  margin-top: 10px;
  position: sticky;
  bottom: 0;
`;
