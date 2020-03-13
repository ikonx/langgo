import React, { useState, useContext } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import TranslateItem from "../../atoms/TranslateItem/TranslateItem";
import Button from "../../atoms/Button/Button";
import { Filter } from "../../../helpers/interfaces/filter.interface";
import TranslationsContext from "../../../ context/translatations/translations.context";

const StyledWrapper = styled.TouchableOpacity`
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
  index?: any;
}

const TranslateCard = ({ lgToLearn, lgLearnt, index }: Props) => {
  const [canDelete, setCanDelete] = useState(false);
  const { onDelete } = useContext(TranslationsContext);
  return (
    <View
      elevation={5}
      shadowRadius={10}
      shadowOpacity={0.1}
      shadowOffset={{
        width: 0,
        height: 2
      }}
      shadowColor={"#000"}
    >
      <StyledWrapper onLongPress={() => setCanDelete(!canDelete)}>
        <StyledTranslationsWrapper>
          <TranslateItem
            flag={lgToLearn.flag}
            text={lgToLearn.text}
            isLearntLg
          />
          <StyledDivider />
          <TranslateItem flag={lgLearnt.flag} text={lgLearnt.text} />
        </StyledTranslationsWrapper>
        {canDelete ? (
          <Button text={`-`} onPress={() => onDelete(index)} type="delete" />
        ) : (
          <Button text="+" onPress={() => {}} />
        )}
      </StyledWrapper>
    </View>
  );
};

export default TranslateCard;
