import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ArtistScreen from '../screens/ArtistScreen'
import { StackStyle } from './themes'

const Stack = createStackNavigator();

export default function ArtistStack() {
  return (
    <Stack.Navigator screenOptions={StackStyle}>
      <Stack.Screen name="Artist" component={ArtistScreen} />
    </Stack.Navigator>
  )
}
