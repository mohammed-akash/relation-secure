import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feed from './src/screens/Feed';
import Notification from './src/screens/Notification';
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';
import TabNavigator from './src/navigators/Tabnavigator';
const Stack = createNativeStackNavigator();

const App = ({ params, }) => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Tab' component={TabNavigator} options={{ animation: "default" }} />
      <Stack.Screen name='Feed' component={Feed} options={{ animation: "slide_from_right" }} />
      <Stack.Screen name='Notification' component={Notification} options={{ animation: "slide_from_right" }} />
      <Stack.Screen name='Profile' component={Profile} options={{ animation: "slide_from_right" }} />
      <Stack.Screen name='Search' component={Search} options={{ animation: "slide_from_right" }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
