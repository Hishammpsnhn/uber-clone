import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/RestaurantDetail/About'
import { Divider } from "react-native-elements";
import MenuItems from '../components/RestaurantDetail/MenuItems';
import ViewCart from '../components/RestaurantDetail/ViewCart';

export default function RestaurantDetail(props) {
  return (
    <View style={{flex:1}}>
        <About props={props}/>
        <Divider width={1.8} style={{ marginVertical: 20 }} />
        <MenuItems restaurantname={props.route.params.name} />
        <ViewCart/>
    </View>
  )
}