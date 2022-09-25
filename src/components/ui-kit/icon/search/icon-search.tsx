import styled from "styled-components";

import { IconProps, IconVariant } from "../types";
import { getIconStylesByVariant } from "../utils";

import { ReactComponent as SearchSvg } from "./search.svg";

const StyledSearchSvg = styled(SearchSvg)<IconProps>`
  ${({ variant }) => variant && getIconStylesByVariant(variant)}
`;

export const IconSearch = ({
  width = "22px",
  height = "22px",
  variant = IconVariant.Primary,
  ...props
}: IconProps) => {
  return (
    <StyledSearchSvg
      width={width}
      height={height}
      variant={variant}
      {...props}
    />
  );
};
