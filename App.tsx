import * as React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";
// import { BlurView } from "expo-blur";

import Home from "./src/components/pages/Home";
import Fav from "./src/components/pages/Fav";
// import TabBar from "./src/components/molecules/TabBar/TabBar";
import FiltersProvider from "./src/ context/filters/filters.provider";
import FiltersModal from "./src/components/organisms/FiltersModal/FiltersModal";
import TranslateCardModal from "./src/components/organisms/TranslateCardModal/TranslateCardModal";
import TranslationsProvider from "./src/ context/translatations/translations.provider";

const Stack = createStackNavigator();

function App() {
  return (
    <FiltersProvider>
      <TranslationsProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              gestureEnabled: true,
              cardOverlayEnabled: true,
              ...TransitionPresets.ModalPresentationIOS
            }}
            mode="modal"
            headerMode="none"
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "Lang-go" }}
            />
            <Stack.Screen
              name="Fav"
              component={Fav}
              initialParams={{ user: "me" }}
            />
            <Stack.Screen
              name="createFilterModal"
              component={FiltersModal}
              initialParams={{ user: "me" }}
              options={{
                title: "",
                headerTransparent: true,
                headerShown: false,
                cardStyle: { backgroundColor: "transparent", height: 300 },
                gestureResponseDistance: { vertical: 600 }
                // headerBackground: () => (
                //   <BlurView tint="light" intensity={100} style={{ flex: 1 }} />
                // ),
              }}
            />
            <Stack.Screen
              name="createTranslateCardModal"
              component={TranslateCardModal}
              initialParams={{ user: "me" }}
              options={{
                title: "",
                headerTransparent: true,
                headerShown: false,
                cardStyle: { backgroundColor: "transparent", height: 300 },
                gestureResponseDistance: { vertical: 600 }
                // headerBackground: () => (
                //   <BlurView tint="light" intensity={100} style={{ flex: 1 }} />
                // ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <TabBar /> */}
      </TranslationsProvider>
    </FiltersProvider>
  );
}
export default App;
