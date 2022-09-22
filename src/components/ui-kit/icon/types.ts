import { SVGAttributes } from "react";

export interface IconProps extends SVGAttributes<SVGElement> {
  height?: string;
  width?: string;
  variant?: IconVariant;
}

export enum IconVariant {
  Success = "success",
  Warning = "warning",
  Error = "error",
  Primary = "primary",
  Secondary = "secondary",
}
