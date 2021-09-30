import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import platform from '../../helpers/platform'

export default function ButtonPicker({ text, image, styleButton, disabled, sourceIcon, onPress, styleText }) {
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
    width: 180,
    height: 30,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: platform.brandPink,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: platform.brndLight,
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center'
  }
})
