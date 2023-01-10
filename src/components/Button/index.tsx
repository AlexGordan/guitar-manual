import { Button } from "antd";
import React from "react";
import styled from "styled-components";

interface IProps {
  text: string;
  onClick: () => void;
}

const CustomButton = ({ text, onClick }: IProps) => {
  return <Component onClick={onClick}>{text}</Component>;
};

const Component = styled(Button)``;

export default CustomButton;
