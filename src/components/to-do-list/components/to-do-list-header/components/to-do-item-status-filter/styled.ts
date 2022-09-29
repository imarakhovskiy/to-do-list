import styled from "styled-components";

import { Button } from "components/ui-kit";

export const StatusFiltersWrapper = styled.div`
  display: flex;
`;

export const StatusFilterButton = styled(Button)`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FilterIconWrapper = styled.span`
  line-height: 0;
  margin-right: 5px;
`;
