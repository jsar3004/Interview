import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { View } from 'react-native';

import Home from './screens/Home/Home';
import Invoice from './screens/Invoice/Invoice';


// Define your stack navigator
const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
   Invoice: {
      screen: Invoice,
    },
  },
  {
    initialRouteName: 'Home', // Set the initial screen to Home
    headerMode: 'none',
  }
);

// Create an app container for the stack navigator
const AppContainer = createAppContainer(StackNavigator);

function App(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <AppContainer />
    </View>
  );
}

export default App;
