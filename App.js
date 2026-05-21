import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ToastProvider } from './src/components/ToastProvider';
import TabBarIcon from './src/components/TabBarIcon';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import AnnouncementDetailScreen from './src/screens/AnnouncementDetailScreen';
import PeopleScreen from './src/screens/PeopleScreen';
import PeopleProfileScreen from './src/screens/PeopleProfileScreen';
import RecognitionScreen from './src/screens/RecognitionScreen';
import PostRecognitionScreen from './src/screens/PostRecognitionScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const RootStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const PeopleStack = createNativeStackNavigator();
const RecognitionStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0EA5E9',
    background: '#0F172A',
    card: '#0F172A',
    text: '#F8FAFC',
    border: '#1E293B',
    notification: '#F59E0B',
  },
};

const screenOptions = {
  headerStyle: { backgroundColor: '#0F172A' },
  headerTintColor: '#F8FAFC',
  headerTitleStyle: { fontWeight: '700' },
  headerShadowVisible: false,
  contentStyle: { backgroundColor: '#0F172A' },
  animation: 'slide_from_right',
};

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ title: 'Notifications', headerBackTitle: 'Back' }}
      />
      <HomeStack.Screen
        name="AnnouncementDetail"
        component={AnnouncementDetailScreen}
        options={{ title: 'Announcement', headerBackTitle: 'Home' }}
      />
    </HomeStack.Navigator>
  );
}

function PeopleStackNavigator() {
  return (
    <PeopleStack.Navigator screenOptions={screenOptions}>
      <PeopleStack.Screen
        name="PeopleList"
        component={PeopleScreen}
        options={{ headerShown: false }}
      />
      <PeopleStack.Screen
        name="PeopleProfile"
        component={PeopleProfileScreen}
        options={{ title: 'Profile', headerBackTitle: 'Back' }}
      />
    </PeopleStack.Navigator>
  );
}

function RecognitionStackNavigator() {
  return (
    <RecognitionStack.Navigator screenOptions={screenOptions}>
      <RecognitionStack.Screen
        name="RecognitionFeed"
        component={RecognitionScreen}
        options={{ headerShown: false }}
      />
      <RecognitionStack.Screen
        name="PostRecognition"
        component={PostRecognitionScreen}
        options={{ title: 'Post Recognition', headerBackTitle: 'Back' }}
      />
    </RecognitionStack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#0EA5E9',
        tabBarInactiveTintColor: '#64748B',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#0F172A',
          borderTopColor: '#1E293B',
          borderTopWidth: 1,
          paddingTop: 8,
          paddingBottom: Platform.OS === 'ios' ? 24 : 10,
          height: Platform.OS === 'ios' ? 88 : 68,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: -2,
          marginBottom: Platform.OS === 'ios' ? 0 : 4,
        },
        tabBarIcon: ({ focused, color, size }) => (
          <TabBarIcon
            routeName={route.name}
            focused={focused}
            color={color}
            size={size}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="People" component={PeopleStackNavigator} />
      <Tab.Screen name="Recognition" component={RecognitionStackNavigator} />
      <Tab.Screen name="More" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ToastProvider>
        <NavigationContainer theme={navTheme}>
          <StatusBar style="light" />
          <RootStack.Navigator
            screenOptions={{ ...screenOptions, headerShown: false, animation: 'fade' }}
            initialRouteName="Splash"
          >
            <RootStack.Screen name="Splash" component={SplashScreen} />
            <RootStack.Screen name="Login" component={LoginScreen} />
            <RootStack.Screen
              name="Main"
              component={MainTabs}
              options={{ animation: 'fade_from_bottom' }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </SafeAreaProvider>
  );
}
