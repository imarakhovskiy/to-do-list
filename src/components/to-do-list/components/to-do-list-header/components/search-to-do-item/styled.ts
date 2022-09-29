import styled from "styled-components";

import { Button, Input } from "components/ui-kit";

export const SearchWrapper = styled.div`
  display: flex;
`;

export const SearchInput = styled(Input)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const SearchButton = styled(Button)`
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
