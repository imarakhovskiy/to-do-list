import styled from "styled-components";

import { InputBorder, InputProportion, InputShadow, InputShape } from "./types";
import {
  getInputByProportionStyles,
  getInputByShapeStyles,
  getInputByBorderStyles,
  getInputByShadowStyles,
} from "./utils";

export interface StyledInputProps {
  _proportions: InputProportion;
  _shadow: InputShadow;
  _border: InputBorder;
  _shape?: InputShape;
}

export const StyledInput = styled.input<StyledInputProps>`
  border-radius: 5px;
  line-height: 1;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  color: ${({ theme }) => theme.textColor.primary};

  ${(props) => getInputByProportionStyles(props._proportions)}
  ${(props) => getInputByBorderStyles(props._border)}
  ${(props) => props._shape && getInputByShapeStyles(props._shape)}
  ${(props) => props._shadow && getInputByShadowStyles(props._shadow)}

  &:focus,
  &:active {
    outline: none;
  }
`;
