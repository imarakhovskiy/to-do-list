import {
  css,
  FlattenSimpleInterpolation,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from "styled-components";

import { CheckboxBorder, CheckboxProportion, CheckboxShape } from "./types";

const checkboxSizeByPropoptions: Record<CheckboxProportion, string> = {
  [CheckboxProportion.Small]: "14px",
  [CheckboxProportion.Medium]: "18px",
  [CheckboxProportion.Large]: "24px",
};

export const checkboxStylesByProportionsMap: Record<
  CheckboxProportion,
  FlattenSimpleInterpolation
> = {
  [CheckboxProportion.Small]: css`
    width: ${checkboxSizeByPropoptions[CheckboxProportion.Small]};
    height: ${checkboxSizeByPropoptions[CheckboxProportion.Small]};
  `,
  [CheckboxProportion.Medium]: css`
    width: ${checkboxSizeByPropoptions[CheckboxProportion.Medium]};
    height: ${checkboxSizeByPropoptions[CheckboxProportion.Medium]};
  `,
  [CheckboxProportion.Large]: css`
    width: ${checkboxSizeByPropoptions[CheckboxProportion.Large]};
    height: ${checkboxSizeByPropoptions[CheckboxProportion.Large]};
  `,
};

export const checkboxLabelStylesByProportionsMap: Record<
  CheckboxProportion,
  FlattenSimpleInterpolation
> = {
  [CheckboxProportion.Small]: css`
    font-size: 12px;
    padding-left: ${checkboxSizeByPropoptions[CheckboxProportion.Small]};
    min-height: ${checkboxSizeByPropoptions[CheckboxProportion.Small]};
  `,
  [CheckboxProportion.Medium]: css`
    font-size: 16px;
    padding-left: ${checkboxSizeByPropoptions[CheckboxProportion.Medium]};
    min-height: ${checkboxSizeByPropoptions[CheckboxProportion.Medium]};
  `,
  [CheckboxProportion.Large]: css`
    font-size: 22px;
    padding-left: ${checkboxSizeByPropoptions[CheckboxProportion.Large]};
    min-height: ${checkboxSizeByPropoptions[CheckboxProportion.Large]};
  `,
};

export const checkboxStylesByShapeMap: Record<
  CheckboxShape,
  FlattenSimpleInterpolation
> = {
  [CheckboxShape.Rounded]: css`
    border-radius: 10px;
  `,
  [CheckboxShape.Circle]: css`
    border-radius: 50%;
  `,
};

export const checkboxStylesByBorderMap: Record<
  CheckboxBorder,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  [CheckboxBorder.Light]: css`
    border-width: 1px;
  `,
  [CheckboxBorder.Medium]: css`
    border-width: 2px;
  `,
  [CheckboxBorder.Bold]: css`
    border-width: 4px;
  `,
  [CheckboxBorder.None]: css`
    border: none;
  `,
};
