import styled from "styled-components";

import { IconProps, IconVariant } from "../types";
import { getIconStylesByVariant } from "../utils";

import { ReactComponent as CancelSvg } from "./cancel.svg";

const StyledCancelSvg = styled(CancelSvg)<IconProps>`
  ${({ variant }) => variant && getIconStylesByVariant(variant)}
`;

export const IconCancel = ({
  width = "22px",
  height = "22px",
  variant = IconVariant.Primary,
  ...props
}: IconProps) => {
  return (
    <StyledCancelSvg
      width={width}
      height={height}
      variant={variant}
      {...props}
    />
  );
};
