import {
  InputProportion,
  InputBorder,
  InputShadow,
  InputShape,
  InputVariant,
} from "./types";

import {
  css,
  FlattenSimpleInterpolation,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from "styled-components";
import { ButtonProportion } from "../button";

export const inputStylesByProportionsMap: Record<
  InputProportion,
  FlattenSimpleInterpolation
> = {
  [InputProportion.Small]: css`
    font-size: 12px;
  `,
  [InputProportion.Medium]: css`
    font-size: 16px;
  `,
  [InputProportion.Large]: css`
    font-size: 22px;
  `,
};

export const inputStylesByVariantMap: Record<
  InputVariant,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  [InputVariant.Primary]: css`
    border-color: ${({ theme }) => theme.borderColor.primary};
  `,
  [InputVariant.Secondary]: css`
    border-color: ${({ theme }) => theme.borderColor.secondary};
  `,
  [InputVariant.Success]: css`
    border-color: ${({ theme }) => theme.borderColor.success};
  `,
  [InputVariant.Warning]: css`
    border-color: ${({ theme }) => theme.borderColor.warning};
  `,
  [InputVariant.Error]: css`
    border-color: ${({ theme }) => theme.borderColor.error};
  `,
};

export const inputStylesByShapeMap: Record<
  InputShape,
  FlattenSimpleInterpolation
> = {
  [InputShape.Rounded]: css`
    border-radius: 10px;
  `,
  [InputShape.Circle]: css`
    border-radius: 1.2em;
  `,
};

export const inputStylesByBorderMap: Record<
  InputBorder,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  [InputBorder.Light]: css`
    border-width: 1px;
  `,
  [InputBorder.Medium]: css`
    border-width: 2px;
  `,
  [InputBorder.Bold]: css`
    border-width: 4px;
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

export const inputProportionsToButtonMap: Record<
  InputProportion,
  ButtonProportion
> = {
  [InputProportion.Small]: ButtonProportion.Small,
  [InputProportion.Medium]: ButtonProportion.Medium,
  [InputProportion.Large]: ButtonProportion.Large,
};
