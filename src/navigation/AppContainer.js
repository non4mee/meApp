import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

import MainStack from './MainStack'

function AppContainer() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

export default AppContainer
