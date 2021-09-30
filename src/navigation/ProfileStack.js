import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen'
import { StackStyle } from './themes'

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={StackStyle}>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}
