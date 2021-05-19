import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import SearchPincode from './src/SearchPincode';
import SearchState from './src/SearchState';
import SearchDistrict from './src/SearchDistrict';
import Results from './src/Results';

const Stack = createStackNavigator();

export default function() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home' headerMode='false' >
          <Stack.Screen component={Home} name='home' />
          <Stack.Screen component={SearchPincode} name='pincode' />
          <Stack.Screen component={SearchState} name='state' />
          <Stack.Screen component={SearchDistrict} name='district' />
          <Stack.Screen component={Results} name='results' />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
