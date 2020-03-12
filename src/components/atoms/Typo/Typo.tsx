import React from "react";
import styled, { css } from "styled-components/native";

const StyledText = styled.Text`
  color: #333333;
  font-size: 22px;
  font-weight: bold;

  ${props =>
    props.h === "l" &&
    css`
      font-size: 26px;
    `}
  ${props =>
    props.h === "xl" &&
    css`
      font-size: 32px;
    `}
`;

interface Props {
  children: any;
  h?: "m" | "l" | "xl";
  style?: any;
}

const Typo = ({ children, h = "m", style = {} }: Props) => {
  return (
    <StyledText h={h} style={style}>
      {children}
    </StyledText>
  );
};

export default Typo;
