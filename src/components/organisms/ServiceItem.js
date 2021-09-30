import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import platform from '../../helpers/platform'

export default function ServiceItem({ title, image, about, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <View style={styles.letCol}>
          <Image source={image} style={styles.image}  />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightCol}>
          <Text style={styles.about} numberOfLines={4} >{about}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
  const styles = StyleSheet.create ({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 10,
      width: '100%',
      height: 150,
    },
    btn: {
      flexDirection: 'row',
    },
    letCol: {
      alignItems: 'center'
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 25
    },
    title: {
      fontFamily: platform.fontBold,
      fontSize: 15,
      color: platform.brandBlack,
    },
    about: {
      paddingLeft: 20,
      paddingTop: 16,
      fontFamily: platform.fontMuseSemiBold
    },
    rightCol: {
      width: 250
    }
  })
