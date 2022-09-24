import styled from "styled-components";

import { IconProps, IconVariant } from "../types";
import { getIconStylesByVariant } from "../utils";

import { ReactComponent as DeleteSvg } from "./delete.svg";

const StyledDeleteSvg = styled(DeleteSvg)<IconProps>`
  ${({ variant }) => variant && getIconStylesByVariant(variant)}
`;

export const IconDelete = ({
  width = "22px",
  height = "22px",
  variant = IconVariant.Primary,
  ...props
}: IconProps) => {
  return (
    <StyledDeleteSvg
      width={width}
      height={height}
      variant={variant}
      {...props}
    />
  );
};
