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

    svg {
      width: 14px;
      height: 14px;
    }
  `,
  [ButtonProportion.Medium]: css`
    font-size: 16px;
    padding: 0.6em;

    svg {
      width: 18px;
      height: 18px;
    }
  `,
  [ButtonProportion.Large]: css`
    font-size: 22px;
    padding: 1em;

    svg {
      width: 24px;
      height: 24px;
    }
  `,
};

export const buttonStylesByVariantMap: Record<
  ButtonVariant,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  [ButtonVariant.Primary]: css`
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    border-color: ${({ theme }) => theme.borderColor.primary};
  `,
  [ButtonVariant.Secondary]: css`
    background-color: ${({ theme }) => theme.backgroundColor.secondary};
    border-color: ${({ theme }) => theme.borderColor.secondary};
  `,
  [ButtonVariant.Success]: css`
    background-color: ${({ theme }) => theme.backgroundColor.success};
    border-color: ${({ theme }) => theme.borderColor.success};
    color: ${({ theme }) => theme.color.white};

    svg {
      fill: ${({ theme }) => theme.color.white};
    }
  `,
  [ButtonVariant.Warning]: css`
    background-color: ${({ theme }) => theme.backgroundColor.warning};
    border-color: ${({ theme }) => theme.borderColor.warning};
    color: ${({ theme }) => theme.color.white};

    svg {
      fill: ${({ theme }) => theme.color.white};
    }
  `,
  [ButtonVariant.Error]: css`
    background-color: ${({ theme }) => theme.backgroundColor.error};
    border-color: ${({ theme }) => theme.borderColor.error};
    color: ${({ theme }) => theme.color.white};

    svg {
      fill: ${({ theme }) => theme.color.white};
    }
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
  [ButtonBorder.Light]: css`
    border-width: 1px;
  `,
  [ButtonBorder.Medium]: css`
    border-width: 2px;
  `,
  [ButtonBorder.Bold]: css`
    border-width: 4px;
  `,
  [ButtonBorder.None]: css`
    border: none;
  `,
};

export const buttonStylesByShadowMap: Record<
  ButtonShadow,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  [ButtonShadow.Default]: css``,
  [ButtonShadow.None]: css`
    box-shadow: none;
  `,
};
