/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const theme = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Contatos"
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.accent,
        labelPosition: "below-icon",
        style: {
          height: 75,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        },
        labelStyle: {
          fontSize: 16,
        },
        iconStyle: {
          paddingHorizontal: 5,
        },
      }}
    >
      <BottomTab.Screen
        name="Contatos"
        component={() => <View />}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
