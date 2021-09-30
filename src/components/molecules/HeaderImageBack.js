import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import platform from '../../helpers/platform'

export default function HeaderImageBack({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Image source={require('../../img/back.png')} style={styles.backArrow} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    padding: 16
  },
  backArrow: {
    width: 11,
    height: 18
  }
})
