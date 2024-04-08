// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Login from './src/components/Login/Login'; 

// export default function App() {
//   return (
//        <Login />
//   );
// }

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './src/components/WelcomePage/Welcome';
import HomePage from './src/components/HomePage/Home';
import PhoneVerification from './src/components/Verification/PhoneVerification';
import auth from '@react-native-firebase/auth';

// Initialize Firebase
if (!auth().isInitialized) {
  auth().initializeApp();
}

AppRegistry.registerComponent(appName, () => App);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;