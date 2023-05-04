import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnbroadingScreen';
const Stack = createNativeStackNavigator();
const HomeStack = ({ navigation }) => {
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
          name="Onboarding"
          component={OnboardingScreen}
          options={{
            title:"",
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title:"",
            tabBarVisible: false ,
            animationEnabled: false,
          }}
        />
        {/* <Stack.Screen
          name="Player"
          component={PlayerScreen}
          options={{
            title:"",
            tabBarVisible: false ,
            animationEnabled: false,
          }}
        /> */}
      </Stack.Navigator>
    );
  };
export default HomeStack;