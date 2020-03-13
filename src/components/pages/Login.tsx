import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Button from "../atoms/Button/Button";
import Typo from "../atoms/Typo/Typo";
import api from "../../helpers/api/api";

const StyledModalContent = styled.View`
  background: #fff;
  align-self: stretch;
  justify-content: flex-start;
  border-radius: 24px;
  padding: 24px;
  margin: 16px;
  align-self: center;
`;

const StyledModalWrapper = styled.SafeAreaView`
  justify-content: center;
  flex: 1;
  background: #111;
`;

const StyledImage = styled.Image`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0.6;
`;

interface Props {}

const Login = (props: Props) => {
  const onLoggin = () => {
    api.user.get("3");
  };

  return (
    <StyledModalWrapper style={{ flex: 1 }}>
      <StyledImage
        source={{ uri: "https://source.unsplash.com/1600x900/daily?wallpaper" }}
      />
      <StyledModalContent>
        <View style={{ marginBottom: 16 }}>
          <Typo h="l">Connexion</Typo>
          <Typo
            h="m"
            style={{
              color: "#999999",
              fontWeight: "300",
              fontSize: 16,
              marginTop: 4
            }}
          >
            Vous devez être connecté pour passer à la suite.
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
            defaultValue={""}
            placeholder="Identifiant"
          />
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
            defaultValue={""}
            placeholder="Mot de passe"
          />
        </View>
        <Button
          text="Se connecter"
          style={{ marginTop: 16 }}
          onPress={onLoggin}
        />
      </StyledModalContent>
    </StyledModalWrapper>
  );
};

export default Login;
