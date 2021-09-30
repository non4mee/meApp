import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ServiceScreen from '../screens/ServiceScreen'
import { StackStyle } from './themes'

const Stack = createStackNavigator();

export default function ServiceStack() {
  return (
    <Stack.Navigator screenOptions={StackStyle}>
      <Stack.Screen name="Service" component={ServiceScreen} />
    </Stack.Navigator>
  )
}
