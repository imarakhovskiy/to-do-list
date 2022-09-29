import styled from "styled-components";

import { SearchToDoItem } from "./components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DoneAllCount = styled.p`
  padding: 4px 0;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
`;

export const StyledSearch = styled(SearchToDoItem)``;
