import {
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from "styled-components";

import {
  ButtonBorder,
  ButtonProportion,
  ButtonShadow,
  ButtonShape,
  ButtonVariant,
} from "./types";
import {
  buttonStylesByProportionsMap,
  buttonStylesByVariantMap,
  buttonStylesByShapeMap,
  buttonStylesByBorderMap,
  buttonStylesByShadowMap,
} from "./constants";

export const getButtonByProportionStyles = (
  buttonProportions: ButtonProportion
): FlattenSimpleInterpolation => {
  return buttonStylesByProportionsMap[buttonProportions];
};

export const getButtonByVariantStyles = (
  buttonVariant: ButtonVariant
): FlattenInterpolation<ThemeProps<DefaultTheme>> =>
  buttonStylesByVariantMap[buttonVariant];

export const getButtonByShapeStyles = (
  buttonShape: ButtonShape
): FlattenInterpolation<ThemeProps<DefaultTheme>> =>
  buttonStylesByShapeMap[buttonShape];

export const getButtonByBorderStyles = (
  buttonBorder: ButtonBorder
): FlattenInterpolation<ThemeProps<DefaultTheme>> => {
  return buttonStylesByBorderMap[buttonBorder];
};

export const getButtonByShadowStyles = (
  buttonShadow: ButtonShadow
): FlattenInterpolation<ThemeProps<DefaultTheme>> => {
  return buttonStylesByShadowMap[buttonShadow];
};
