import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import platform from '../../helpers/platform'

export default function Input({
  title,
  placeholder,
  styleInput,
  disabled,
  _value,
  onChangeText,
  styleContainer,
  ...rest
}) {
  const [text, setText] = useState('')
  useEffect (() => {
    setText(_value)
  }, [_value])
  return (
    <View style={[styles.container, styleContainer, disabled && styles.disabled]}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={[styles.input, styleInput, disabled && styles.disabled]}
        value={text}
        onChangeText={newText => {
          setText(newText)
          onChangeText(newText)
        }}
        placeholder={placeholder}
        placeholderTextColor='#D4D4D8'
        {...rest}
      />
    </View>
  )
}
  const styles = StyleSheet.create ({
    container: {
      width: '90%',
      marginBottom: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: platform.brandPink,
      backgroundColor: platform.brandLight,
      ...platform.shadow,
      backgroundColor: 'rgba(255,255,255,0.3)',
      alignItems: 'center',
    },
    input: {
      fontFamily: platform.fontBold,
      height: 50,
      width: 200,
      textAlign: 'center'
    },
  })
