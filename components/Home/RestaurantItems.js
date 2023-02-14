import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
    },
];

export default function RestaurantItems(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {
                props.restaurantsData.map((restaurant, i) => (
                    <View key={i} style={{ backgroundColor: 'white', padding: 15, marginTop: 10 }}>
                        <RestauranImages image={restaurant.image_url} />
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                    </View>
                ))
            }
        </TouchableOpacity>
    )
}

const RestauranImages = (props) => (
    <>
        <Image
            source={{
                uri: props.image,
            }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
)
const RestaurantInfo = (props) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
            marginTop: 10,
        }}
    >
        <View >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: "grey" }}>{props.rating}</Text>
        </View>
        <View
            style={{
                backgroundColor: '#eee',
                height: 30,
                width: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 35
            }}
        >
            <Text>4.5</Text>
        </View>

    </View>
)