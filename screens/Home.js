import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'
import Searching from '../components/Searching'
import Catagories from '../components/Catagories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'

const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  //yelp API
  // const [city, setCity] = useState("San Francisco");

  // const getRestaurantsFromYelp = () => {
  //   const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

  //   const apiOptions = {
  //     headers: {
  //       Authorization: `Bearer ${YELP_API_KEY}`,
  //     },
  //   };

  //   return fetch(yelpUrl, apiOptions)
  //     .then((res) => res.json())
  //     .then((json) =>
  //       setRestaurantData(json.businesses)
  //     );
  // };

  // useEffect(() => {
  //   getRestaurantsFromYelp()
  // }, [])

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <Searching />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Catagories />
        <RestaurantItems restaurantsData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  )
}