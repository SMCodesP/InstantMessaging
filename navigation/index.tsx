/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootStackNavigator from "./RootStackNavigator";
import { useTheme } from "react-native-paper";

const Navigation = () => {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        dark: false,
        colors: {
          background: theme.colors.background,
          border: theme.colors.backdrop,
          text: theme.colors.text,
          card: theme.colors.background,
          notification: theme.colors.notification,
          primary: theme.colors.surface,
        },
      }}
    >
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
