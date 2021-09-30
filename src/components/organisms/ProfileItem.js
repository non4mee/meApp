import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import platform from '../../helpers/platform'

import Input from '../organisms/Input'

export default function ProfileItem() {
  return (
    <View style={styles.container}>
      <View style={styles.leftCol}>
        <Text style={styles.leftTextName}>Name:</Text>
        <Text style={styles.leftTextAbout}>About:</Text>
        <Text style={styles.leftTextExp}>Experience:</Text>
      </View>
      <View style={styles.rightCol}>
        <Input
          styleContainer={styles.inputName}
        />
        <Input
          styleContainer={styles.inputAbout}
        />
        <Input
          styleContainer={styles.inputExp}
        />
      </View>
    </View>
  )
}
  const styles = StyleSheet.create ({
    container: {
      paddingHorizontal: 16,
      flexDirection: 'row'
    },
    leftCol: {
    },
    leftTextName: {
      paddingTop: 67,
      fontFamily: platform.fontBold
    },
    leftTextAbout: {
      fontFamily: platform.fontBold,
      paddingTop: 69
    },
    leftTextExp: {
      fontFamily: platform.fontBold,
      paddingTop: 65
    },
    rightCol: {
      paddingTop: 50,
      paddingLeft: 20
    },
    inputName: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      paddingBottom: 10
    },
    inputAbout: {
      width: 200,
      height: 100
    },
    inputExp: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      paddingBottom: 10
    }
  })
