import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// STORE
import { useAuthStore } from '../stores/AuthStore';
// UTILE
import { colors } from '../styles/commonStyle';
// COMPONENT
import SafeAreaView from '../components/layout/SafeAreaView';
// SCREEN
import Login from '../screens/auth/LoginScreen'; // 로그인
import JoinMember from '../screens/auth/JoinMemberScreen'; // 회원가입
import HomeMain from '../screens/home/HomeMainScreen'; // HomeMain
import SettingMain from '../screens/setting/SettingMainScreen'; // SettingMain

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

function WithHeader(props) {
  console.log('props', props);
  return <SafeAreaView header={false}></SafeAreaView>;
}

function setScreen(name, headerShown) {}

const beforeLoginStack = createStackNavigator();

export default function Navigation() {
  const { user } = useAuthStore((state) => state);
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
                name="Login"
                // component={(props) => {
                //   console.log('props', props);
                //   return (
                //     <SafeAreaView header={false}>
                //       <LoginScreen {...props} />
                //     </SafeAreaView>
                //   );
                // }}
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="JoinMember"
                component={JoinMember}
                options={{ title: '' }}
              />
            </Stack.Group>
          </Stack.Navigator>
        ) : (
          //  after login
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
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
              name="HomeMain"
              component={HomeMain}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="SettingMain"
              component={SettingMain}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
