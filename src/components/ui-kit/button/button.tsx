import { ButtonHTMLAttributes } from "react";

import {
  ButtonProportion,
  ButtonShadow,
  ButtonBorder,
  ButtonVariant,
  ButtonShape,
} from "./types";
import { StyledButton } from "./styled";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  proportions?: ButtonProportion;
  shadow?: ButtonShadow;
  border?: ButtonBorder;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  children?: React.ReactNode;
}

export const Button = ({
  proportions = ButtonProportion.Medium,
  shadow = ButtonShadow.None,
  border = ButtonBorder.None,
  variant = ButtonVariant.Primary,
  shape,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      {...props}
      _proportions={proportions}
      _shadow={shadow}
      _border={border}
      _variant={variant}
      _shape={shape}
    >
      {children}
    </StyledButton>
  );
};
