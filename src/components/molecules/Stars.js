import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import platform from '../../helpers/platform'

import Star from '../atoms/Star'

export default function Stars() {
  const [selected, isSelected] = useState()

  return (
    <View style={styles.container}>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </View>
  )
}
  const styles = StyleSheet.create ({
    container: {
      flexDirection: 'row',
      paddingLeft: 10,

    },
    image: {
      width: 20,
      height: 20
    }
  })
