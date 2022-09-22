import styled from "styled-components";

export const StyledHeader = styled.nav`
  position: sticky;
  top: 0;
  padding: 10px 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  box-shadow: ${({ theme }) => `0 2px 3px 0 ${theme.shadowColor.primary}`};
`;

export const HeaderLeftBlock = styled.div``;
export const HeaderCenterBlock = styled.div``;
export const HeaderRightBlock = styled.div``;
