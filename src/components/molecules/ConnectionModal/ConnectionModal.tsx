import React, { useState, useEffect } from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import LottieView from "lottie-react-native";
import * as alertAnim from "../../../../assets/jumpy_anim.json";
import { View, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Typo from "../../atoms/Typo/Typo";

interface Props {}

const ConnectionModal = (props: Props) => {
  const netInfo = useNetInfo();
  const [fadeAnim] = useState(new Animated.Value(0));
  const [yAnim] = useState(new Animated.Value(-100));

  useEffect(() => {
    if (netInfo.isConnected) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300
      }).start();
      Animated.timing(yAnim, {
        toValue: -100,
        duration: 300
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300
      }).start();
      Animated.timing(yAnim, {
        toValue: 0,
        duration: 300
      }).start();

      // Animated.timing(fadeAnim, {
      //   toValue: 0,
      //   duration: 300,
      //   delay: 1000
      // }).start();
      // Animated.timing(yAnim, {
      //   toValue: -100,
      //   duration: 300,
      //   delay: 1000
      // }).start();
    }
  }, [netInfo.isConnected]);

  return (
    <SafeAreaView
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        zIndex: 2,
        margin: 16,
      }}
    >
      <Animated.View
        style={{
          backgroundColor: "#fff",
          padding: 8,
          paddingBottom: 16,
          opacity: fadeAnim,
          top: yAnim,
          flexDirection: "row",
          position: "relative",
          borderRadius: 16
        }}
      >
        <LottieView
          style={{
            width: 50,
            height: 50,
            zIndex: 3
          }}
          autoPlay
          autoSize
          source={alertAnim}
        />
        <View style={{ flex: 1, marginLeft: 8 }}>
          <Typo>Connection perdus</Typo>
          <Typo style={{ fontSize: 12, fontWeight: "500", color: "#666" }}>
            Nous allons sauvegarder vos nouveeaux éléments jusqu'à la
            reconnexion.
          </Typo>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default ConnectionModal;
