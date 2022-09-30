import styled from "styled-components";

import { SearchToDoItem, ToDoItemStatusFilter } from "./components";
import { device } from "constants/breakpoints";

export const StyledToDoItemStatusFilter = styled(ToDoItemStatusFilter)`
  align-self: flex-start;
`;

export const StyledSearchToDoItem = styled(SearchToDoItem)`
  margin-top: 5px;

  @media ${device.mobileM} {
    margin-top: 0;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  @media ${device.mobileM} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
