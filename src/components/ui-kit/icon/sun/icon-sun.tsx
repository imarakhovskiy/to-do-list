import styled from "styled-components";

import { IconProps } from "../types";
import { getIconStylesByVariant } from "../utils";

import { ReactComponent as SunSvg } from "./sun.svg";

const StyledSunSvg = styled(SunSvg)<IconProps>`
  ${({ variant }) => variant && getIconStylesByVariant(variant)}
`;

export const IconSun = ({
  width = "22px",
  height = "22px",
  ...props
}: IconProps) => {
  return <StyledSunSvg width={width} height={height} {...props} />;
};
