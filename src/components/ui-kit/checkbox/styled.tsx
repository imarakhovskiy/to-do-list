import styled from "styled-components";

import {
  CheckboxBorder,
  CheckboxProportion,
  CheckboxShape,
  CheckboxVariant,
} from "./types";
import {
  checkboxStylesByProportionsMap,
  checkboxLabelStylesByProportionsMap,
  checkboxStylesByBorderMap,
  checkboxStylesByShapeMap,
} from "./constants";

interface CustomCheckboxProps {
  _proportions: CheckboxProportion;
  _border: CheckboxBorder;
  _variant: CheckboxVariant;
  _shape?: CheckboxShape;
}

interface StyledCheckboxProps {
  _proportions: CheckboxProportion;
}

export const CheckboxInput = styled.input`
  position: absolute;
  cursor: pointer;
  height: 0;
  width: 0;
  margin: 0;
`;

export const CustomCheckbox = styled.span<CustomCheckboxProps>`
  ${(props) => checkboxStylesByProportionsMap[props._proportions]};
  ${(props) => checkboxStylesByBorderMap[props._border]}
  ${(props) => props._shape && checkboxStylesByShapeMap[props._shape]}

  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: ${({ theme, _variant }) => theme.borderColor[_variant]};
  background-color: ${({ theme }) => theme.backgroundColor.secondary};

  & > svg {
    display: none;
    fill: ${({ theme }) => theme.color.white};
  }

  ${CheckboxInput}:checked ~ & {
    background-color: ${({ theme, _variant }) =>
      theme.backgroundColor[_variant]};

    svg {
      display: block;
    }
  }
`;

export const Container = styled.label<StyledCheckboxProps>`
  ${(props) => checkboxLabelStylesByProportionsMap[props._proportions]}

  position: relative;
  display: flex;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover ${CustomCheckbox} {
    filter: brightness(0.85);
  }
`;
