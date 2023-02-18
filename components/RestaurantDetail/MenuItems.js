import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const menuItems =
    [{
        name: "Chicken Fry",
        image:
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/09/andhra-chicken-fry-kodi-vepudu-recipe.jpg.webp",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    }, {
        name: "Chicken Fry",
        image:
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/09/andhra-chicken-fry-kodi-vepudu-recipe.jpg.webp",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    }, {
        name: "Chicken Fry",
        image:
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/09/andhra-chicken-fry-kodi-vepudu-recipe.jpg.webp",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    }, {
        name: "Chicken Fry",
        image:
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/09/andhra-chicken-fry-kodi-vepudu-recipe.jpg.webp",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    }]

export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {menuItems.map((item, i) => (
                <View>
                    <View key={i}>
                        <View style={styles.menuItemStyle}>
                            <BouncyCheckbox
                                iconStyle={{ borderColor: "lightgray", borderRadius: 0, }}
                                fillColor="green"
                            />
                            <MenuItemInfo food={item} />
                            <MenuItemImage food={item} />
                        </View>
                    </View>
                    <Divider
                        width={0.5}
                        orientation="vertical"
                        style={{ marginHorizontal: 20 }}
                    />
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