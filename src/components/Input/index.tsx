import React from "react";

// helpers
import { SizeType } from "antd/es/config-provider/SizeContext";
import { StyledComponentProps } from "../../typings/common";

// components
import { Input as CustomInput } from "antd";

interface IProps extends StyledComponentProps {
  name: string;
  size?: SizeType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  disabled?: boolean;
  value: any;
  checked?: boolean;
}

const Input = ({ size = "large", disabled = false, checked = false, ...rest }: IProps) => {
  return <CustomInput size={size} disabled={disabled} checked={checked} {...rest} />;
};

export default Input;
