import React from "react";
import { SafeAreaView } from "react-native";
import Typo from "../atoms/Typo/Typo";

interface Props {}

const Fav = (props: Props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: 16
      }}
    >
      <Typo h="xl" style={{ textAlign: "left" }}>
        Settings !
      </Typo>
    </SafeAreaView>
  );
};

export default Fav;
