import { Button } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screens from "../screens";
import navigationStrings from "./navigationStrings";
import { colors } from "../styles/colors";
const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navigationStrings.LanguageScreen}>
        <Stack.Screen
          options={{
            headerTitle: "Sleep Sounds",
            headerTintColor: "white",
            // headerTitleAlign: "center",

            headerStyle: {
              backgroundColor: colors.MainColor,
            },
          }}
          name={navigationStrings.Home}
          component={screens.Home}
        /> 
        
         <Stack.Screen
          options={{
          headerShown:false
          }}
          name={navigationStrings.LanguageScreen}
          component={screens.LanguageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
