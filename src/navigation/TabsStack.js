import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TabsStyle } from './themes'
import TabIcon from '../components/icons/TabIcon'

import ServiceStack from './ServiceStack'
import ArtistStack from './ArtistStack'
import CalendarStack from './CalendarStack'
import ProfileStack from './ProfileStack'

const Tab = createBottomTabNavigator()

function TabsStack() {
  return (
    <Tab.Navigator tabBarOptions={TabsStyle} initialRouteName="Service">
      <Tab.Screen
        name="Service"
        component={ServiceStack}
        options={{ tabBarIcon: () => <TabIcon name={require('../img/salon.png')} />}}
      />
      <Tab.Screen
        name="Artist"
        component={ArtistStack}
        options={{ tabBarIcon: () => <TabIcon name={require('../img/hairdresser.png')} />}}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarStack}
        options={{ tabBarIcon: () => <TabIcon name={require('../img/calendar.jpg')} />}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{ tabBarIcon: () => <TabIcon name={require('../img/profile.png')} />}}
      />
    </Tab.Navigator>
  )
}

export default TabsStack
