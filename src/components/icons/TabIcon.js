import React from 'react'
import { StyleSheet, Image } from 'react-native'
import platform from '../../helpers/platform'

export default function TabIcon({ name }) {
  return (
    <Image style={styles.service} source={name} />
  )
}

const styles = StyleSheet.create({
  service: {
    width: 30,
    height: 30,
    marginTop: 8
  }
})
