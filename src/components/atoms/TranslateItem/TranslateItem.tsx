import React from "react";
import styled, { css } from "styled-components/native";
import { View, Text } from "react-native";
import { Flag } from "react-native-svg-flagkit";

const StyledTranslateItem = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 21px 0;
`;

const StyledFlag = styled(Flag)``;

const StyledText = styled.Text`
  font-size: 16px;
  margin-left: 8px;
  color: #666;
  font-weight: 600;

  ${props =>
    props.isLearntLg &&
    css`
      color: #333;
    `}
`;

interface Props {
  text: string;
  flag: string;
  isLearntLg?: boolean;
}

const TranslateItem = ({ text, flag, isLearntLg }: Props) => {
  return (
    <StyledTranslateItem>
      <StyledFlag id={flag.toUpperCase()} width={22} height={16} />
      <StyledText isLearntLg={isLearntLg}>{text}</StyledText>
    </StyledTranslateItem>
  );
};

export default TranslateItem;
