import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from "react";

import { InputBorder, InputProportion, InputShadow, InputShape } from "./types";
import { StyledInput } from "./styled";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  proportions?: InputProportion;
  shadow?: InputShadow;
  border?: InputBorder;
  shape?: InputShape;
  onChange?: (value: string) => void;
}
const Input = (
  {
    proportions = InputProportion.Medium,
    shadow = InputShadow.None,
    border = InputBorder.None,
    shape,
    value,
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

  return (
    <StyledInput
      {...props}
      _proportions={proportions}
      _shadow={shadow}
      _border={border}
      _shape={shape}
      value={inputValue}
      onChange={onInputValueChange}
      ref={ref}
    >
      {children}
    </StyledInput>
  );
};

const ForwardRefInput = forwardRef<HTMLInputElement, InputProps>(Input);

export { ForwardRefInput as Input };
