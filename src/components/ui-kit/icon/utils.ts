import { IconVariant } from "./types";
import { iconVariantColorsMap } from "./constants";
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";

export const getIconStylesByVariant = (
  iconVariant: IconVariant
): FlattenInterpolation<ThemeProps<DefaultTheme>> =>
  iconVariantColorsMap[iconVariant];
