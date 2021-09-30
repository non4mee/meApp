import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import platform from '../helpers/platform'

import Button from '../components/molecules/Button'
import Input from '../components/organisms/Input'

function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.img} source={require('../img/logo.jpg')}/>
        <Text style={styles.title}>V E L V E T</Text>
        <View style={styles.inputFirst}>
          <Input
            value={login}
            _onChangeText={(text) => setLogin(text)}
            styleInput={styles.input}
            placeholder='Login'
            secureTextEntry={false}
          />
        </View>
        <View style={styles.inputSecond}>
          <Input
            value={password}
            _onChangeText={(text) => setPassword(text)}
            styleInput={styles.input}
            placeholder='Password'
            secureTextEntry
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            styleButton={styles.btn}
            text="Sign In"
            styleText={styles.text}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 100,
    fontFamily: platform.fontBold
  },
  inputFirst: {
    alignItems: 'center',
    paddingTop: 180,
  },
  img: {
    position: 'absolute',
    width: '110%',
    height: '110%'
  },
  inputSecond: {
    alignItems: 'center',
    paddingTop: 10,
  },
  btnContainer: {
    alignItems: 'center',
    paddingTop: 5,
  },
  styleText: {
    color: 'red'
  },
  input: {

  },
  btn: {
    borderWidth: 1,
    borderColor: platform.brandPink
  }
})

export default LoginScreen
