import React from "react"; 
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from './src/navigation/HomeStack';

import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
export default App;

