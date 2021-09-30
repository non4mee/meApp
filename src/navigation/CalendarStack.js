import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CalendarScreen from '../screens/CalendarScreen'
import { StackStyle } from './themes'

const Stack = createStackNavigator();

export default function CalendarStack() {
  return (
    <Stack.Navigator screenOptions={StackStyle}>
      <Stack.Screen name="Calendar" component={CalendarScreen} />
    </Stack.Navigator>
  )
}
