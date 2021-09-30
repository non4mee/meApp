import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { CalendarList } from 'react-native-calendars';
import moment from 'moment'
import platform from '../helpers/platform'

function WeekCalendar() {
  const [selected, setSelected] = useState(true)
  return (
    <View>
      <CalendarList
        minDate={'2021-04-10'}
        onDayPress={() => setSelected(true)}
        current={selected}
        markedDates={{
         '2021-04-14': {selected: true, selectedColor: platform.brandPink},
        }}
      />
    </View>
  )
}

export default WeekCalendar
