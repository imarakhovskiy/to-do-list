import styled from "styled-components";

import { Card, List, ListItem } from "components/ui-kit";
import { ToDoListHeader } from "./components";

const cardPadding = "4px";

export const StyledCard = styled(Card)`
  display: flex;
  padding: 0;
  max-height: 600px;
  overflow-y: auto;
  overflow-y: overlay;
`;

export const StyledToDoList = styled(List)`
  margin-top: 6px;
  padding: 0 ${cardPadding};

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

export const AddToDoItemWrapper = styled.div`
  backdrop-filter: blur(20px);
  padding: ${cardPadding};
  box-shadow: ${({ theme }) => `0 2px 10px 0 ${theme.shadowColor.primary}`};
  margin-top: 6px;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
`;

export const StyledHeader = styled(ToDoListHeader)`
  backdrop-filter: blur(20px);
  padding: ${cardPadding};
  box-shadow: ${({ theme }) => `0 -2px 10px 0 ${theme.shadowColor.primary}`};
  position: -webkit-sticky;
  position: sticky;
  z-index: 1;
  top: 0;
`;

export const NoItemsMessage = styled.p`
  padding: 20px 10px;
  text-align: center;
`;
