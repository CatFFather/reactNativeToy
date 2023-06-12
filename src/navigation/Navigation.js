import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
// SETTINGS
import SettingMain from '../screens/setting/SettingMainScreen'; // SettingMain
import MyInfoModify from '../screens/setting/MyInfoModifyScreen'; // SettingMain

const iconNames = {
  HomeMainTab: {
    focused: 'home',
    nonFocused: 'home-outline',
  },
  SettingMainTab: {
    focused: 'settings',
    nonFocused: 'settings-outline',
  },
};

const noneTabBarRoute = {
  MyInfoModify: true,
};

// function WithHeader(props) {
//   console.log('props', props);
//   return <SafeAreaView ></SafeAreaView>;
// }
// const WithHeader = (Component) => (props) =>
//   (
//     <SafeAreaView>
//       <Component {...props} />
//     </SafeAreaView>
//   );

// function setScreen(name, headerShown) {}

const BeforeLoginStack = createStackNavigator();
function BeforeLoginStackScreen() {
  return (
    <BeforeLoginStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        cardStyle: { backgroundColor: colors.mainBackgroundColor },
        headerTitleAlign: 'center',
      }}
    >
      <BeforeLoginStack.Screen
        name="Login"
        // component={(props) => {
        //   console.log('props', props);
        //   return (
        //     <SafeAreaView header={false}>
        //       <LoginScreen {...props} />
        //     </SafeAreaView>
        //   );
        // }}
        screenOptions={{
          headerTitleAlign: 'center',
        }}
        component={Login}
        options={{ headerShown: false }}
      />
      <BeforeLoginStack.Screen
        name="JoinMember"
        component={JoinMember}
        options={{ title: '회원가입' }}
      />
    </BeforeLoginStack.Navigator>
  );
}

// HOME
const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <HomeStack.Screen
        name="HomeMain"
        component={HomeMain}
        options={{ headerShown: false, title: '홈' }}
      />
    </HomeStack.Navigator>
  );
}

// SETTING
const SettingStack = createStackNavigator();
function SettingStackScreen() {
  return (
    <SettingStack.Navigator
      screenOptions={{
        // headerTitle 이걸로 header 커스텀 가능
        headerTitleAlign: 'center',
      }}
    >
      <SettingStack.Screen
        name="SettingMain"
        component={SettingMain}
        options={{ headerShown: false, title: '설정' }}
      />
      <SettingStack.Screen
        name="MyInfoModify"
        component={MyInfoModify}
        options={{ title: '내 정보 수정' }}
      />
    </SettingStack.Navigator>
  );
}

const AfterLoginTab = createBottomTabNavigator();
function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route);
  return noneTabBarRoute[routeName] ? 'none' : 'flex';
}
export default function Navigation() {
  const { user } = useAuthStore((state) => state);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {!user ? (
          //  before login
          <BeforeLoginStackScreen />
        ) : (
          //  after login
          <AfterLoginTab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                const iconName = focused
                  ? iconNames[route.name].focused
                  : iconNames[route.name].nonFocused;
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: colors.signatureColor,
              tabBarInactiveTintColor: 'gray',
              tabBarShowLabel: false,
              headerShown: false,
              tabBarStyle: {
                display: getTabBarVisibility(route),
              },
            })}
          >
            <AfterLoginTab.Screen
              name="HomeMainTab"
              component={HomeStackScreen}
            />
            <AfterLoginTab.Screen
              name="SettingMainTab"
              component={SettingStackScreen}
            />
          </AfterLoginTab.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
