import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";

import { IconVariant } from "./types";

export const iconVariantColorsMap: Record<
  IconVariant,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  [IconVariant.Primary]: css`
    fill: ${({ theme }) => theme.textColor.primary};
  `,
  [IconVariant.Secondary]: css`
    fill: ${({ theme }) => theme.textColor.secondary};
  `,
  [IconVariant.Success]: css`
    fill: ${({ theme }) => theme.textColor.success};
  `,
  [IconVariant.Warning]: css`
    fill: ${({ theme }) => theme.textColor.warning};
  `,
  [IconVariant.Error]: css`
    fill: ${({ theme }) => theme.textColor.error};
  `,
};
