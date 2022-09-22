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
  _shadow: ButtonShadow;
  _border: ButtonBorder;
  _variant: ButtonVariant;
  _shape?: ButtonShape;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 5px;
  line-height: 0;

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
