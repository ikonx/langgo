import React, { useContext, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";
import styled from "styled-components/native";
import FiltersContext from "../../../ context/filters/filters.context";
import Typo from "../../atoms/Typo/Typo";
import { TextInput } from "react-native-gesture-handler";
import Button from "../../atoms/Button/Button";
import { useNavigation } from "@react-navigation/native";

const StyledModalContent = styled.View`
  background: #fff;
  align-self: stretch;
  justify-content: flex-start;
  border-radius: 24px;
  padding: 24px;
`;

const StyledModalWrapper = styled.View`
  margin: 0 16px;
  align-content: flex-end;
  justify-content: flex-end;
  flex: 1;
`;

interface Props {}

const FiltersModal = (props: Props) => {
  const navigation = useNavigation();
  const [filter, setFilter] = useState({ value: "", label: "" });
  const { setCreatingFilter, createFilter } = useContext(FiltersContext);

  useEffect(() => {
    return () => {
      setCreatingFilter(false);
    };
  }, []);

  const submitHanlder = () => {
    createFilter(filter);
    setCreatingFilter(false);
    navigation.goBack();
  };

  const updateInput = (key: string) => (value: any) => {
    const newFilter = filter;
    newFilter[key] = value;
    setFilter(newFilter);
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled
      style={{ flex: 1 }}
      keyboardVerticalOffset={70}
    >
      <StatusBar barStyle="light-content" />
      <StyledModalWrapper>
        <SafeAreaView>
          <StyledModalContent>
            <View style={{ marginBottom: 16 }}>
              <Typo h="l">Créer un nouveau filtre</Typo>
              <Typo
                h="m"
                style={{
                  color: "#999999",
                  fontWeight: "300",
                  fontSize: 16,
                  marginTop: 4
                }}
              >
                Vous devez donner un nom à ce nouveau filtreet un emoji.
              </Typo>
            </View>
            <View>
              <TextInput
                style={{
                  height: 40,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#e1e1e1",
                  padding: 8,
                  borderRadius: 8,
                  marginBottom: 8
                }}
                placeholder="Emoji: ex 🍟"
                onChangeText={updateInput("emoji")}
              />
              <TextInput
                style={{
                  height: 40,
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderColor: "#e1e1e1",
                  padding: 8,
                  borderRadius: 8
                }}
                placeholder="Nom du filtre"
                onChangeText={updateInput("label")}
              />
            </View>
            <Button
              text="Valider"
              style={{ marginTop: 16 }}
              onPress={submitHanlder}
            />
          </StyledModalContent>
        </SafeAreaView>
      </StyledModalWrapper>
    </KeyboardAvoidingView>
  );
};

export default FiltersModal;
