import styled from "styled-components";

import { device } from "constants/breakpoints";

export const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 10px;
  max-width: 728px;
  box-sizing: border-box;

  @media ${device.mobileL} {
    margin: 0 20px;
  }

  @media ${device.tablet} {
    margin: 0 auto;
  }
`;
