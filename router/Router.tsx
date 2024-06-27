// router/Router.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/LoginPage';
import CreateAccountScreen from '../pages/HomePage';
import WelcomeScreen from '../pages/Welcome';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}initialRouteName="Welcome">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
