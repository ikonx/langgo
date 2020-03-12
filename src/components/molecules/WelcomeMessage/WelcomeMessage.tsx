import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import Avatar from "../../atoms/Avatar/Avatar";
import Typo from "../../atoms/Typo/Typo";

const StyledWrapper = styled.View`
  flex-direction: row;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin: 0 16px;
  align-self: stretch;
  border-radius: 12px;
`;

interface Props {}

const WelcomeMessage = (props: Props) => {
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Avatar image="https://p7.hiclipart.com/preview/184/956/42/drake-internet-meme-rapper-drake.jpg" />
        <Typo style={{ marginLeft: 8 }}>Welcome Drake</Typo>
      </View>
      <Text>🙍‍♂️</Text>
    </StyledWrapper>
  );
};

export default WelcomeMessage;
