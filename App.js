import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { MonitoringScreen } from './src/screens/MonitoringScreen';
import { MainTabNavigator } from './src/navigation/MainTabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="MainTabs"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen 
          name="MainTabs" 
          component={MainTabNavigator}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen name="Monitoring" component={MonitoringScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

