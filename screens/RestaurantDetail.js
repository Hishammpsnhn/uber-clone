import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/RestaurantDetail/About'
import { Divider } from "react-native-elements";
import MenuItems from '../components/RestaurantDetail/MenuItems';

export default function RestaurantDetail() {
  return (
    <View style={{flex:1}}>
        <About/>
        <Divider width={1.8} style={{ marginVertical: 20 }} />
        <MenuItems/>
    </View>
  )
}