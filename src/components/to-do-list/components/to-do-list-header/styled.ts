import styled from "styled-components";

import { Button } from "components/ui-kit";
import { SearchToDoItem } from "./components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1;
`;

export const DoneAllCount = styled(Button)`
  background-color: ${({ theme }) => theme.backgroundColor.primary};

  span {
    margin-right: 4px;
    color: ${({ theme }) => theme.textColor.success};
  }
`;

export const StyledSearch = styled(SearchToDoItem)``;
