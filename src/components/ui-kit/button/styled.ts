import styled from "styled-components";

import {
  ButtonBorder,
  ButtonProportion,
  ButtonShadow,
  ButtonShape,
  ButtonVariant,
} from "./types";
import {
  getButtonByProportionStyles,
  getButtonByVariantStyles,
  getButtonByShapeStyles,
  getButtonByBorderStyles,
  getButtonByShadowStyles,
} from "./utils";

export interface StyledButtonProps {
  _proportions: ButtonProportion;
  _border: ButtonBorder;
  _variant: ButtonVariant;
  _shape?: ButtonShape;
  _shadow?: ButtonShadow;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 5px;
  border-style: solid;
  line-height: 0;
  box-shadow: ${({ theme, _variant }) =>
    `2px 2px 3px 0px ${theme.shadowColor[_variant]}`};

  ${(props) => getButtonByProportionStyles(props._proportions)}
  ${(props) => getButtonByVariantStyles(props._variant)}
  ${(props) => getButtonByBorderStyles(props._border)}
  ${(props) => props._shape && getButtonByShapeStyles(props._shape)}
  ${(props) => props._shadow && getButtonByShadowStyles(props._shadow)}

  &:focus,
  &:active {
    outline: none;
  }
`;
