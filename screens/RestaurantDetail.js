import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/RestaurantDetail/About'
import { Divider } from "react-native-elements";
import MenuItems from '../components/RestaurantDetail/MenuItems';
import ViewCart from '../components/RestaurantDetail/ViewCart';

const foods =
  [{
    id: 1,
    name: "Chicken Fry",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/09/andhra-chicken-fry-kodi-vepudu-recipe.jpg.webp",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$4.5",
    reviews: 1244,
    rating: 4.5,
  }, {
    id: 2,
    name: "Chicken chilli",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/09/andhra-chicken-fry-kodi-vepudu-recipe.jpg.webp",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$2.50",
    reviews: 1244,
    rating: 4.5,
  }, {
    id: 3,
    name: "Chicken Gravy",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/09/andhra-chicken-fry-kodi-vepudu-recipe.jpg.webp",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$10.5",
    reviews: 1244,
    rating: 4.5,
  }, {
    id: 4,
    name: "Broasted Chicken",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/09/andhra-chicken-fry-kodi-vepudu-recipe.jpg.webp",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$15.5",
    reviews: 1244,
    rating: 4.5,
  }]

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods}  />
      <ViewCart n navigation={navigation} />
    </View>
  )
}