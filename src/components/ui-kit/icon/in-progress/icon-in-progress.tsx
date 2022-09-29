import styled from "styled-components";

import { IconProps, IconVariant } from "../types";
import { getIconStylesByVariant } from "../utils";

import { ReactComponent as InProgressSvg } from "./in-progress.svg";

const StyledInProgressSvg = styled(InProgressSvg)<IconProps>`
  ${({ variant }) => variant && getIconStylesByVariant(variant)}
`;

export const IconInProgress = ({
  width = "22px",
  height = "22px",
  variant = IconVariant.Primary,
  ...props
}: IconProps) => {
  return (
    <StyledInProgressSvg
      width={width}
      height={height}
      variant={variant}
      {...props}
    />
  );
};
