import styled from "styled-components";
import { Button } from "../button";

import {
  InputBorder,
  InputProportion,
  InputShadow,
  InputShape,
  InputVariant,
} from "./types";
import {
  getInputByProportionStyles,
  getInputByVariantStyles,
  getInputByShapeStyles,
  getInputByBorderStyles,
  getInputByShadowStyles,
} from "./utils";

interface StyledInputProps {
  _proportions: InputProportion;
  _clearable: boolean;
}

interface InputWrapperProps {
  _variant: InputVariant;
  _shadow: InputShadow;
  _border: InputBorder;
  _shape?: InputShape;
}

export const StyledInput = styled.input<StyledInputProps>`
  padding: 0.5em;
  line-height: 1;
  color: ${({ theme }) => theme.textColor.primary};
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  border: none;
  box-sizing: border-box;
  flex-grow: 2;
  flex-shrink: 2;
  flex-basis: 100%;

  ${(props) => getInputByProportionStyles(props._proportions)}

  &:focus,
  &:active {
    outline: none;
  }
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  border-radius: 5px;
  border-style: solid;
  display: flex;
  align-items: center;
  overflow: hidden;

  ${(props) => getInputByBorderStyles(props._border)}
  ${(props) => getInputByShadowStyles(props._shadow)}
  ${(props) => getInputByVariantStyles(props._variant)}
  ${(props) => props._shape && getInputByShapeStyles(props._shape)}
`;

export const ClearButton = styled(Button)`
  flex-grow: 0;
  flex-shrink: 0;
  padding: 2px;
  margin-right: 10px;
`;
