import styled from "styled-components";

import { IconProps, IconVariant } from "../types";
import { getIconStylesByVariant } from "../utils";

import { ReactComponent as ClearSvg } from "./clear.svg";

const StyledClearSvg = styled(ClearSvg)<IconProps>`
  ${({ variant }) => variant && getIconStylesByVariant(variant)}
`;

export const IconClear = ({
  width = "22px",
  height = "22px",
  variant = IconVariant.Primary,
  ...props
}: IconProps) => {
  return (
    <StyledClearSvg
      width={width}
      height={height}
      variant={variant}
      {...props}
    />
  );
};
