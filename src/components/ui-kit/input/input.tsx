import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  InputBorder,
  InputProportion,
  InputShadow,
  InputShape,
  InputVariant,
} from "./types";
import { StyledInput, InputWrapper, ClearButton } from "./styled";
import { IconClear } from "../icon";
import { inputProportionsToButtonMap } from "./constants";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  clearable?: boolean;
  proportions?: InputProportion;
  variant?: InputVariant;
  shadow?: InputShadow;
  border?: InputBorder;
  shape?: InputShape;
  onChange?: (value: string) => void;
}
const Input = (
  {
    proportions = InputProportion.Medium,
    variant = InputVariant.Primary,
    shadow = InputShadow.None,
    border = InputBorder.None,
    shape,
    value,
    className,
    clearable = false,
    children,
    onChange,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [inputValue, setNewValue] = useState(value);

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  const onInputValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      onChange && onChange(value);
      setNewValue(() => value);
    },
    [onChange]
  );

  const onClear = useCallback(() => {
    setNewValue(() => {
      const newValue = "";

      onChange && onChange(newValue);

      return newValue;
    });
  }, [onChange]);

  return (
    <InputWrapper
      _variant={variant}
      _shadow={shadow}
      _border={border}
      _shape={shape}
      className={className}
    >
      <StyledInput
        {...props}
        ref={ref}
        _proportions={proportions}
        _clearable={clearable}
        value={inputValue}
        onChange={onInputValueChange}
      >
        {children}
      </StyledInput>
      {clearable && (
        <ClearButton
          onClick={onClear}
          proportions={inputProportionsToButtonMap[proportions]}
        >
          <IconClear />
        </ClearButton>
      )}
    </InputWrapper>
  );
};

const ForwardRefInput = forwardRef<HTMLInputElement, InputProps>(Input);

export { ForwardRefInput as Input };
