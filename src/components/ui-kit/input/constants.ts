import { InputProportion, InputBorder, InputShadow, InputShape } from "./types";

import {
  css,
  FlattenSimpleInterpolation,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from "styled-components";

export const inputStylesByProportionsMap: Record<
  InputProportion,
  FlattenSimpleInterpolation
> = {
  [InputProportion.Small]: css`
    font-size: 12px;
    padding: 0.5em;
  `,
  [InputProportion.Medium]: css`
    font-size: 16px;
    padding: 0.6em;
  `,
  [InputProportion.Large]: css`
    font-size: 22px;
    padding: 1em;
  `,
};

export const inputStylesByShapeMap: Record<
  InputShape,
  FlattenSimpleInterpolation
> = {
  [InputShape.Rounded]: css`
    border-radius: 10px;
  `,
};

export const inputStylesByBorderMap: Record<
  InputBorder,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  [InputBorder.Primary]: css`
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.borderColor.primary};
  `,
  [InputBorder.None]: css`
    border: none;
  `,
};

export const inputStylesByShadowMap: Record<
  InputShadow,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  [InputShadow.Primary]: css`
    box-shadow: ${({ theme }) =>
      `2px 2px 3px 0px ${theme.shadowColor.primary}`};
  `,
  [InputShadow.None]: css`
    box-shadow: none;
  `,
};
