import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import platform from '../../helpers/platform'

export default function Star() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../img/star.png')}/>
    </View>
  )
}
  const styles = StyleSheet.create ({
    container: {
    },
    image: {
      width: 20,
      height: 20
    }
  })
