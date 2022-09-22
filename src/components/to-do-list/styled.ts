import styled from "styled-components";

import { Card, ListItem, List } from "components/ui-kit";

export const StyledCard = styled(Card)`
  margin-top: 130px;
  padding: 20px;
`;

export const StyledList = styled(List)`
  ${styled(ListItem)} {
    &:not(:last-child) {
      margin-bottom: 3px;
    }
  }
`;
