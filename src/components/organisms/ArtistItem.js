import React, { useState, useEffect  } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import platform from '../../helpers/platform'
import _ from 'lodash'

import Stars from '../molecules/Stars'

export default function ArtistItem({ title, image, about, onPress, styleBtn, exp, position }) {
  const [selected, isSelected] = useState()
  const [count, setCount] = useState(5)

  const onSelect = () => isSelected(selected => !selected)
  const addStars = () => setCount(count + 1)

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.btn, styleBtn]} onPress={onPress}>
        <View style={styles.letCol}>
          <Image source={image} style={styles.image}  />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.position}>{position}</Text>
          <Text style={styles.exp}>{exp}</Text>
        </View>
        <View style={styles.rightCol}>
          <Text style={styles.about} numberOfLines={5} >{about}</Text>
          <View style={styles.footerCol}>
            <Text style={styles.textFeed}>Feedback</Text>
            <Stars />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingBottom: 10,
      paddingVertical: 16
    },
    btn: {
      flexDirection: 'row',
      backgroundColor: platform.brandItemColor,
      borderRadius: 15,
      height: 200,
      padding: 15
    },
    letCol: {
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 25
    },
    title: {
      paddingLeft: 28,
      fontFamily: platform.fontBold,
      fontSize: 15,
      color: platform.brandBlack
    },
    position: {
      paddingLeft: 28,
    },
    exp: {
      marginTop: 30
    },
    about: {
      paddingTop: 16,
      fontFamily: platform.fontMuseSemiBold,
      textAlign: 'left'
    },
    rightCol: {
      width: 200
    },
    star: {
      width: 20,
      height: 20,
      marginTop: -3,
      marginLeft: 5
    },
    selestedStar: {
      backgroundColor: 'yellow',
      width: 20,
      height: 20,
      marginTop: -3,
      marginLeft: 5
    },
    footerCol: {
      flexDirection: 'row',
      marginTop: 65,
      paddingLeft: 30
    },
    textFeed: {
      fontFamily: platform.fontBold
    }
  })
