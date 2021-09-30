import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StackStyle } from './themes'
import TabsStack from './TabsStack'
import LoginScreen from '../screens/LoginScreen'

const Stack = createStackNavigator()

function MainStack({ initialRouteName }) {
  return (
    <Stack.Navigator screenOptions={StackStyle} initialRouteName={initialRouteName}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={TabsStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default MainStack
