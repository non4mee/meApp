import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, FlatList, ImageBackground, ScrollView } from 'react-native'
import platform from '../helpers/platform'
import _ from 'lodash'

import ServiceItem from '../components/organisms/ServiceItem'
import HeaderImageBack from '../components/molecules/HeaderImageBack'

const data = [
  { title: 'haircut', image: { uri: 'https://www.9linesmag.com/wp-content/uploads/2015/02/1202-73.jpg'}, about: 'Предпочитаете длинные, средней длины или короткие волосы? Не столь важно. Хорошая стрижка поможет придать волосам форму и облегчить повседневную укладку.'},
  { title: 'styling', image: { uri: 'https://dm.henkel-dam.com/is/image/henkel/600x800_Lockenwickler-anwenden-mittelgrosse-locken-wcms-de?scl=1&fmt=jpg'}, about: 'Подготовка к созданию пышной укладки начинается с мытья волос шампунем. Армин Морбах советует: «Чтобы получить хороший объем, используйте ополаскиватель, не утяжеляющий волосы».'},
  { title: 'manicure', image: { uri: 'https://www.tufishop.com.ua/images/thumbnails/250/250/detailed/121/manikur_kor_15.jpg'}, about: 'Гель лаки разных цветов и оттенков. Очень эффектно смотрятся однотонные покрытия любых цветов.'},
  { title: 'pedicure', image: { uri: 'https://prostonail.com/wp-content/uploads/2018/04/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-7-800x800.jpg'}, about: 'Красивый педикюр — я у твоих ног. История педикюра насчитывает сотни тысяч лет. Лет, наполненных уймой занимательных событий'},
  { title: 'coloration', image: { uri: 'https://static.tildacdn.com/tild6139-3232-4464-b739-373734613666/--2020.jpg'}, about: 'Красивый, насыщенный цвет, который преобразит Ваши волосы в сияющую, зеркальную материю'},
  { title: 'massage', image: { uri: 'https://img.championat.com/s/735x490/news/big/q/j/massazh-kotoryj-umenshit-vashi-formy-vy-prosto-lezhite-i-hudeete_1564681008234562299.jpg'}, about: 'Процедура массажа – это способ механического воздействия на ткани'},
]

function ServiceScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderImageBack onPress={() => navigation.popToTop()}/>
    })
  }, [])
  return (
    <ImageBackground style={styles.container} source={require('../img/logo.jpg')}>
      <ScrollView style={styles.container}>
        {_.map(data, (item, key) => {
            return(
              <ServiceItem
                key={key}
                image={item.image}
                title={item.title}
                about={item.about}
                onPress={() => navigation.navigate('Master', {item})}
              />
            )
          })
        }
      </ScrollView>
    </ImageBackground>
  )
}


const styles = StyleSheet.create ({
  container: {
    width: '100%',
    height: '100%'
  }
})

export default ServiceScreen
