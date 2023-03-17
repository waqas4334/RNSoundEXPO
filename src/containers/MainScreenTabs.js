import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SoundsScreen } from "../components/organisms/SoundsScreen";
import { SettingScreen } from "../components/organisms/SettingScreen";
import { CustomScreen } from "../components/organisms/CustomScreen";
import { Ionicons } from "@expo/vector-icons";
import { Sliders } from "react-native-feather";
import {
  scale,
  verticalScale,
  moderateScale,
  s,
} from "react-native-size-matters";
const Tab = createMaterialTopTabNavigator();

const MainScreenTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Sounds"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarLabelStyle: { fontSize: 15 },
        tabBarStyle: { backgroundColor: "#15afa7" },
      }}
    >
      <Tab.Screen
        name="Sounds"
        component={SoundsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-musical-notes" size={scale(20)} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Custom"
        component={CustomScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Sliders color={color} size={scale(20)} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-settings" color={color} size={scale(20)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { MainScreenTabs };
