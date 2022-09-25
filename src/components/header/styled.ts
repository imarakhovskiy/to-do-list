import styled from "styled-components";

import { device } from "constants/breakpoints";

export const StyledHeader = styled.nav`
  position: sticky;
  top: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  box-shadow: ${({ theme }) => `0 2px 3px 0 ${theme.shadowColor.primary}`};

  @media ${device.tablet} {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const HeaderLeftBlock = styled.div``;
export const HeaderCenterBlock = styled.div``;
export const HeaderRightBlock = styled.div``;
