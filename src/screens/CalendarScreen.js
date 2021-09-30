import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ScrollView } from 'react-native'
import platform from '../helpers/platform'

import HeaderImageBack from '../components/molecules/HeaderImageBack'
import WeekCalendar from './WeekCalendar'

function CalendarScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <WeekCalendar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  safe: {
    flex: 1
  },
  container: {
    flexDirection: 'row'
  }
})

export default CalendarScreen
