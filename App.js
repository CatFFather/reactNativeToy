import React, { useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { basicScreenStyle } from './src/styles/commonStyle';
// TODO Navigation 에 재정의 필요
import LoginScreen from './src/screens/auth/LoginScreen'; // 로그인
import JoinMemberScreen from './src/screens/auth/JoinMemberScreen'; // 회원가입

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* before login */}
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            ...basicScreenStyle,
          }}
        >
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="JoinMemberScreen" component={JoinMemberScreen} />
        </Stack.Navigator>

        {/* after login */}
        {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
