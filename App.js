import React, { useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
// STORE
import { useAuthStore } from './src/stores/AuthStore';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from './src/styles/commonStyle';
// TODO Navigation 에 재정의 필요
import LoginScreen from './src/screens/auth/LoginScreen'; // 로그인
import JoinMemberScreen from './src/screens/auth/JoinMemberScreen'; // 회원가입
import HomeMain from './src/screens/home/HomeMain'; // HomeMain
import SettingMain from './src/screens/setting/SettingMain'; // SettingMain

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const iconNames = {
  Home: {
    focused: 'home',
    nonFocused: 'home-outline',
  },
  Setting: {
    focused: 'settings',
    nonFocused: 'settings-outline',
  },
};
export default function App() {
  const { user } = useAuthStore((state) => state);
  console.log('user', user);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {!user ? (
          //  before login
          <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
              cardStyle: { backgroundColor: colors.mainBackgroundColor },
            }}
          >
            <Stack.Group>
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="JoinMemberScreen"
                component={JoinMemberScreen}
                options={{ title: '' }}
              />
            </Stack.Group>
          </Stack.Navigator>
        ) : (
          //  after login
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                // let iconName;
                // if (route.name === 'Home') {

                // } else if (route.name === 'Setting') {
                //   iconName = focused ? 'settings' : 'settings-outline';
                // }
                const iconName = focused
                  ? iconNames[route.name].focused
                  : iconNames[route.name].nonFocused;

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: colors.signatureColor,
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen
              name="Home"
              component={HomeMain}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Setting"
              component={SettingMain}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
