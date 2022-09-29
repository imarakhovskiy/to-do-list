import {
  ButtonProportion,
  ButtonShadow,
  ButtonBorder,
  ButtonVariant,
  ButtonShape,
} from "./types";
import { ContentWrapper, StyledButton } from "./styled";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  proportions?: ButtonProportion;
  shadow?: ButtonShadow;
  border?: ButtonBorder;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button = ({
  proportions = ButtonProportion.Medium,
  shadow = ButtonShadow.None,
  border = ButtonBorder.None,
  variant = ButtonVariant.Primary,
  shape,
  icon: Icon,
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
      {Icon || <ContentWrapper>{children}</ContentWrapper>}
    </StyledButton>
  );
};
