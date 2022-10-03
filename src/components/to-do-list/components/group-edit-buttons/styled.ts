import styled from "styled-components";

import { Button } from "components/ui-kit";
import { device } from "constants/breakpoints";

export const StyledGroupEditButton = styled(Button)`
  svg {
    margin-left: 5px;
  }

  @media ${device.tablet} {
    :not(:last-child) {
      margin-left: 10px;
    }
  }
`;

export const CancelButton = styled(Button)`
  align-self: center;
  margin-top: 10px;
  width: 100%;

  svg {
    margin-left: 5px;
  }

  @media ${device.mobileM} {
    width: fit-content;
  }

  @media ${device.tablet} {
    margin-top: 0;
  }
`;

export const ActionButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: row-reverse;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
