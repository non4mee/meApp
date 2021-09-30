import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, ImageBackground, FlatList } from 'react-native'
import platform from '../helpers/platform'
import UserFeedback from 'react-native-user-feedback';

import HeaderImageBack from '../components/molecules/HeaderImageBack'
import ArtistItem from '../components/organisms/ArtistItem'

const data = [
    { title: 'Helen', position: 'haircat',image: { uri: 'https://hair-fresh.ru/wp-content/uploads/2019/12/42f12e6dff374b7429d9fa4aa734a1a1-1.jpg'}, exp: 'Experience: 3 years', about: 'Привет, я мастер салона красоты "VELVET". Работаю здесь уже 3 года. Делать красоту - мое призвание.'},
    { title: 'Diana', position: 'styling',image: { uri: 'https://cp14.nevsepic.com.ua/193/19272/thumbs/1385123542-39.jpg'}, exp: 'Experience:6 years', about: 'Привет, я мастер салона красоты "VELVET". Работаю здесь уже 6 лет. Делать красоту - мое призвание.'},
    { title: 'Abby', position: 'manicure',image: { uri: 'https://i.pinimg.com/474x/8e/31/16/8e3116517a74bcab08f0fb0cdb2cd724.jpg'}, exp: 'Experience:2 years', about: 'Привет, я мастер салона красоты "VELVET". Работаю здесь уже 2 года. Делать красоту - мое призвание.'},
    { title: 'Carmen', position: 'pedicure',image: { uri: 'https://www.modnapricha.info/wp-content/uploads/2019/12/top-strizhek-dlya-kvadratnoj-formy-lica49.jpg'}, exp: 'Experience:7 years', about: 'Привет, я мастер салона красоты "VELVET". Работаю здесь уже 7 лет. Делать красоту - мое призвание.'},
    { title: 'Jully', position: 'coloration',image: { uri: 'https://hair-fresh.ru/wp-content/uploads/2019/12/e1acbd70c4f21b32c1acd82cb8a7d003-1.jpg'}, exp: 'Experience:3 years', about: 'Привет, я мастер салона красоты "VELVET". Работаю здесь уже 3 года. Делать красоту - мое призвание.'},
    { title: 'Deborah', position: 'massage',image: { uri: 'https://hair-fresh.ru/wp-content/uploads/2018/03/a37d0436f8f99c6d20d2debb15d55cb2-2-370x297.jpg'}, exp: 'Experience:5 years', about: 'Привет, я мастер салона красоты "VELVET". Работаю здесь уже 5 лет. Делать красоту - мое призвание.'}
  ]

function ArtistScreen({ navigation }) {
  const [rating, setRating] = useState()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderImageBack onPress={() => navigation.popToTop()}/>
    })
  }, [])
  return (
    <ImageBackground style={styles.container} source={require('../img/logo.jpg')}>
      <View style={styles.block}>
        <FlatList
          data={data}
          keyExtrator={( item, index) => String(index)}
          renderItem={({ item, index}) => {
            return (
              <ArtistItem
                key={index}
                title={item.title}
                position={item.position}
                image={item.image}
                exp={item.exp}
                about={item.about}
                onPress={() => onPress(item)}
              />

            )
          }}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create ({
  container: {
    width: '100%',
    height: '100%'
  },
})

export default ArtistScreen
