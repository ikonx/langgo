import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import TranslateItem from "../../atoms/TranslateItem/TranslateItem";
import Button from "../../atoms/Button/Button";
import { Filter } from "../../../helpers/interfaces/filter.interface";

const StyledWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 16px;
  background: white;
  border-radius: 16px;
  margin-top: 16px;
  align-items: center;
`;

const StyledTranslationsWrapper = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const StyledDivider = styled.View`
  height: 2px;
  width: 100%;
  background: #eee;
`;

export interface Translate {
  flag: string;
  text: string;
}

interface Props {
  filter?: Filter;
  lgToLearn: Translate;
  lgLearnt: Translate;
}

const TranslateCard = ({ lgToLearn, lgLearnt }: Props) => {
  return (
    <StyledWrapper
      elevation={5}
      shadowRadius={10}
      shadowOpacity={0.1}
      shadowOffset={{
        width: 0,
        height: 2
      }}
      shadowColor={"#000"}
    >
      <StyledTranslationsWrapper>
        <TranslateItem flag={lgToLearn.flag} text={lgToLearn.text} isLearntLg />
        <StyledDivider />
        <TranslateItem flag={lgLearnt.flag} text={lgLearnt.text} />
      </StyledTranslationsWrapper>
      <Button text="+" onPress={() => {}} />
    </StyledWrapper>
  );
};

export default TranslateCard;
