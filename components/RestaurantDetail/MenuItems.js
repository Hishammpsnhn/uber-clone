import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

const menuItems =
    [{
        name: "Beachside",
        image:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    }, {
        name: "Beachside",
        image:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    }, {
        name: "Beachside",
        image:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    }, {
        name: "Beachside",
        image:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    }]



export default function MenuItems() {
    return (
        <ScrollView  showsVerticalScrollIndicator={false}>
            {menuItems.map((item,i) => (
                <View key={i}>
                    <View style={styles.menuItemStyle}>
                        <MenuItemInfo food={item} />
                        <MenuItemImage food={item} />
                    </View>
                </View>
                ))}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    },
});
const MenuItemInfo = (props) => {
    return (
        <View style={{ width: 240, justifyContent: "space-evenly" }}>
            <Text style={styles.titleStyle}>{props.food.name}</Text>
            <Text>{props.food.name}</Text>
            <Text>{props.food.price}</Text>
        </View>
    )
}

const MenuItemImage = (props) => (
    <View>
        <Image
            source={{ uri: props.food.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8,

            }}
        />
    </View>
)