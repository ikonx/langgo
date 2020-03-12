import React, { useContext } from "react";
import { View, SafeAreaView, Text, ScrollView, StatusBar } from "react-native";
import WelcomeMessage from "../molecules/WelcomeMessage/WelcomeMessage";
import Typo from "../atoms/Typo/Typo";
import Button from "../atoms/Button/Button";
import TranslateCard from "../molecules/TranslateCard/TranslateCard";
import Filters from "../molecules/Filters/Filters";
import { useNavigation } from "@react-navigation/native";
import TranslationsContext from "../../ context/translatations/translations.context";
import EmptySvg from "../atoms/SVG/EmptySvg";

interface Props {}

const Home = (props: Props) => {
  const navigation = useNavigation();
  const { translations } = useContext(TranslationsContext);
  const onAddFilter = () => {
    navigation.navigate("createTranslateCardModal");
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          position: "absolute",
          flex: 1,
          zIndex: 1,
          right: 16,
          bottom: 0
        }}
      >
        <Button size="l" type="primary" text="+" onPress={onAddFilter} />
      </SafeAreaView>
      <ScrollView
        style={{
          backgroundColor: "#fefefe",
          flex: 1
        }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <SafeAreaView
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start"
          }}
        >
          <WelcomeMessage />
          {!!translations.length ? (
            <>
              <Typo h="l" style={{ marginTop: 16, marginLeft: 16 }}>
                Vos traductions du jour
              </Typo>
              <Filters />
              <View
                style={{
                  flex: 1,
                  margin: 16,
                  marginTop: 0,
                  alignSelf: "stretch"
                }}
              >
                {translations.map(translation => {
                  return (
                    <TranslateCard
                      key={translation.lgToLearn.text}
                      lgToLearn={{ ...translation.lgToLearn }}
                      lgLearnt={{
                        ...translation.lgLearnt
                        // flag: translation.flag,
                        // text: "Oh mais qui voilà-je ?"
                      }}
                    />
                  );
                })}
              </View>
            </>
          ) : (
            <View
              style={{
                backgroundColor: "#fff",
                padding: 16,
                borderRadius: 24,
                flex: 1,
                alignSelf: "stretch",
                margin: 16
              }}
              elevation={5}
              shadowRadius={10}
              shadowOpacity={0.1}
              shadowOffset={{
                width: 0,
                height: 2
              }}
              shadowColor={"#000"}
            >
              <Typo h="xl">Vous n'avez pas encore de traduction.</Typo>
              <Typo
                style={{
                  color: "#999999",
                  fontWeight: "500",
                  fontSize: 18,
                  marginTop: 4
                }}
              >
                Vous pouvez créer une traduction en cliquant sur le button
                ci-dessous.
              </Typo>
              <View
                style={{
                  flex: 1
                }}
              >
                <EmptySvg />
              </View>
              <Button text="Créer une traduction" onPress={onAddFilter} />
            </View>
          )}
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Home;
