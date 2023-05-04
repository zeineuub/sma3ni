import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MENUSVG from "../assets/images/menu.svg";
import SettingsScreen from "../screens/SettingsScreen";
const Stack = createNativeStackNavigator();
const  SettingsStack = ({ navigation }) => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible:false,
          headerStyle: {
            backgroundColor: "white",
            elevation: 0, // Android
          },
        }}
      >
     <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title:"",
          animationEnabled: false,
        }}
      />
      </Stack.Navigator>
    )
};
export default  SettingsStack;