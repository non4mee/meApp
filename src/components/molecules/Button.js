import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import platform from '../../helpers/platform'

export default function Button({ text, image, styleButton, disabled, sourceIcon, onPress, styleText }) {
  return (
    <TouchableOpacity
      style={[styles.btn, styleButton, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      {sourceIcon && (
        <Image
          source={sourceIcon}
          style={[styles.icon, styleIcon]}
          resizeMode="contain"
        />
      )}
      <Text style={[styles.text, styleText]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: 230,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: platform.brandLight,
    borderColor: "#7C859F",
  },
  text: {
    fontFamily: platform.fontBold,
    textAlign: 'center',
    justifyContent: 'center'
  }
})
