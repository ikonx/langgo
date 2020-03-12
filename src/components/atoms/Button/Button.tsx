import React, { FC } from "react";
import styled, { css } from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

const StyledText = styled.Text`
  color: white;

  ${({ type }) =>
    type === "outlined" &&
    css`
      color: #1199ee;
    `}

  ${({ isActive }) =>
    isActive &&
    css`
      background: #1199ee;
      border-color: #1199ee;
      color: #fff;
    `}
`;

const StyledButton = styled.TouchableOpacity`
  height: 36px;
  min-width: 36px;
  border-radius: 50px;
  background-color: #1199ee;
  border-width: 2px;
  border-style: solid;
  border-color: #1199ee;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 8px;

  ${({ size }) =>
    size === "l" &&
    css`
      height: 55px;
      width: 55px;
    `}

  ${({ type }) =>
    type === "outlined" &&
    css`
      background-color: transparent;
      border-color: #1199ee;
      color: #1199ee;
    `}

    ${({ isActive }) =>
      isActive &&
      css`
        background: #1199ee;
        border-color: #1199ee;
      `}
`;

interface Props extends TouchableOpacityProps {
  size?: "m" | "l";
  type?: "default" | "outlined" | "primary";
  children?: any;
  text?: string | any;
  isActive?: boolean;
}

const Button = ({ text, isActive, ...props }: Props) => {
  return (
    <StyledButton {...props} isActive={isActive}>
      <StyledText type={props.type} isActive={isActive}>
        {text}
      </StyledText>
    </StyledButton>
  );
};

export default Button;
