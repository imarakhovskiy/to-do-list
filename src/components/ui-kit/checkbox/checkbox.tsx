import React, { useCallback, useEffect, useState } from "react";

import {
  CheckboxBorder,
  CheckboxProportion,
  CheckboxShape,
  CheckboxVariant,
} from "./types";
import { IconDone, IconProps } from "../icon";
import { CheckboxInput, Container, CustomCheckbox } from "./styled";

interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "onChange"
  > {
  label?: React.ReactNode;
  proportions?: CheckboxProportion;
  border?: CheckboxBorder;
  variant?: CheckboxVariant;
  shape?: CheckboxShape;
  checkedIcon?: (props: IconProps) => JSX.Element;
  onChange?: (value: boolean) => void;
}

export const Checkbox = ({
  label,
  checked,
  checkedIcon: CheckedIcon = IconDone,
  proportions = CheckboxProportion.Medium,
  border = CheckboxBorder.None,
  variant = CheckboxVariant.Success,
  shape,
  className,
  onChange,
  ...props
}: CheckboxProps) => {
  const [inputValue, setNewValue] = useState(checked);

  useEffect(() => {
    setNewValue(checked);
  }, [checked]);

  const onInputValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;

      onChange && onChange(checked);
      setNewValue(() => checked);
    },
    [onChange]
  );

  return (
    <Container className={className} _proportions={proportions}>
      {label}
      <CheckboxInput
        {...props}
        type="checkbox"
        checked={inputValue}
        onChange={onInputValueChange}
      />
      <CustomCheckbox
        _proportions={proportions}
        _border={border}
        _variant={variant}
        _shape={shape}
      >
        <CheckedIcon />
      </CustomCheckbox>
    </Container>
  );
};
