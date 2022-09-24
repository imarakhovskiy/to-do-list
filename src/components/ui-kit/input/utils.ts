import {
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from "styled-components";

import { InputBorder, InputProportion, InputShadow, InputShape } from "./types";
import {
  inputStylesByProportionsMap,
  inputStylesByShapeMap,
  inputStylesByBorderMap,
  inputStylesByShadowMap,
} from "./constants";

export const getInputByProportionStyles = (
  inputProportions: InputProportion
): FlattenSimpleInterpolation => {
  return inputStylesByProportionsMap[inputProportions];
};

export const getInputByShapeStyles = (
  inputShape: InputShape
): FlattenInterpolation<ThemeProps<DefaultTheme>> =>
  inputStylesByShapeMap[inputShape];

export const getInputByBorderStyles = (
  inputBorder: InputBorder
): FlattenInterpolation<ThemeProps<DefaultTheme>> => {
  return inputStylesByBorderMap[inputBorder];
};

export const getInputByShadowStyles = (
  inputShadow: InputShadow
): FlattenInterpolation<ThemeProps<DefaultTheme>> => {
  return inputStylesByShadowMap[inputShadow];
};
