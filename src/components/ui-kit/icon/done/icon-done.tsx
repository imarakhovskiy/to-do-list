import styled from "styled-components";

import { IconProps, IconVariant } from "../types";
import { getIconStylesByVariant } from "../utils";

import { ReactComponent as DoneSvg } from "./done.svg";

const StyledDoneSvg = styled(DoneSvg)<IconProps>`
  ${({ variant }) => variant && getIconStylesByVariant(variant)}
`;

export const IconDone = ({
  width = "22px",
  height = "22px",
  variant = IconVariant.Primary,
  ...props
}: IconProps) => {
  return (
    <StyledDoneSvg width={width} height={height} variant={variant} {...props} />
  );
};
