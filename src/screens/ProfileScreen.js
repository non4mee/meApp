import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native'
import platform from '../helpers/platform'
import { CalendarList } from 'react-native-calendars';

import HeaderImageBack from '../components/molecules/HeaderImageBack'
import ButtonPicker from '../components/molecules/ButtonPicker'
import Button from '../components/molecules/Button'
import ProfileItem from '../components/organisms/ProfileItem'

function ProfileScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderImageBack onPress={() => navigation.popToTop()}/>
    })
  }, [])

  const fetchCities = () => {
    fetch("https://autocomplete.wunderground.com/aq?query=")
    .then(cityData=>{
            setCities(cityData.RESULTS.slice(0,9))
        })
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require('../img/bgProfile.jpeg')}
    >
      <ScrollView>
      <View>
        {fetchCities}
      </View>
        <View style={styles.iconCol}>
          <Image
            style={styles.profileIcon}
            source={require('../img/emptyProfile.png')}
            resizeMode='contain'
          />
        </View>
        <View style={styles.btnCol}>
          <ButtonPicker
            styleButton={styles.btnPicker}
            text='Feedback'
          />
          <ButtonPicker
            styleButton={styles.btnPicker}
            text='Logout'
          />
        </View>
        <ProfileItem

        />
        <Button
          styleButton={styles.btnFooter}
          text='Are you artist? Write when you are free'
        />
        <Button
          styleButton={styles.btnFooter}
          text='Are you client? Check when master is free'
        />
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create ({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 60
  },
  iconCol: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: platform.brandPink,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
  profileIcon: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  btnCol: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30
  },
  btnPicker: {
    marginHorizontal: 16
  },
  inputCol: {
    alignItems: 'center',
    paddingTop: 50
  },
  btnFooter: {
    marginTop: 30,
    width: 300,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: platform.brandPink,
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 15
  }
})
export default ProfileScreen
