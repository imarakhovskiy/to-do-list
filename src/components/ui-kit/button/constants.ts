import {
  ButtonBorder,
  ButtonProportion,
  ButtonShadow,
  ButtonShape,
  ButtonVariant,
} from "./types";

import {
  css,
  FlattenSimpleInterpolation,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from "styled-components";

export const buttonStylesByProportionsMap: Record<
  ButtonProportion,
  FlattenSimpleInterpolation
> = {
  [ButtonProportion.Small]: css`
    font-size: 12px;
    padding: 0.5em;
  `,
  [ButtonProportion.Medium]: css`
    font-size: 16px;
    padding: 0.6em;
  `,
  [ButtonProportion.Large]: css`
    font-size: 22px;
    padding: 1em;
  `,
};

export const buttonStylesByVariantMap: Record<
  ButtonVariant,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  [ButtonVariant.Primary]: css`
    background-color: ${({ theme }) => theme.backgroundColor.primary};
  `,
  [ButtonVariant.Secondary]: css`
    background-color: ${({ theme }) => theme.backgroundColor.secondary};
  `,
  [ButtonVariant.Success]: css`
    background-color: ${({ theme }) => theme.backgroundColor.success};
  `,
  [ButtonVariant.Warning]: css`
    background-color: ${({ theme }) => theme.backgroundColor.warning};
  `,
  [ButtonVariant.Error]: css`
    background-color: ${({ theme }) => theme.backgroundColor.error};
  `,
};

export const buttonStylesByShapeMap: Record<
  ButtonShape,
  FlattenSimpleInterpolation
> = {
  [ButtonShape.Rounded]: css`
    border-radius: 10px;
  `,
  [ButtonShape.Circle]: css`
    border-radius: 50%;
  `,
};

export const buttonStylesByBorderMap: Record<
  ButtonBorder,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  [ButtonBorder.Primary]: css`
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.borderColor.primary};
  `,
  [ButtonBorder.None]: css`
    border: none;
  `,
};

export const buttonStylesByShadowMap: Record<
  ButtonShadow,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  [ButtonShadow.Primary]: css`
    box-shadow: ${({ theme }) =>
      `2px 2px 3px 0px ${theme.shadowColor.primary}`};
  `,
  [ButtonShadow.None]: css`
    box-shadow: none;
  `,
};
