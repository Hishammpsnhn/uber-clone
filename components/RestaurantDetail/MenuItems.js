import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';


export default function MenuItems({ restaurantname, foods, hideCheckBox }) {
    console.log("box",hideCheckBox)

    const dispatch = useDispatch();
    const selectedItem = (item, checkboxValue) =>
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                ...item,
                restaurantName: restaurantname,
                checkboxValue: checkboxValue
            },
        })

    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
    );

    const isFoodInCart = (food, cartItems) =>
        Boolean(cartItems.find((item) => item.id === food.id));
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((item, i) => (
                <View key={i}>
                    <View >
                        <View style={styles.menuItemStyle}>
                            {hideCheckBox   ? (
                                <></>
                            ) : (<BouncyCheckbox
                                iconStyle={{ borderColor: "lightgray", borderRadius: 0, }}
                                fillColor="green"
                                isChecked={isFoodInCart(item, cartItems)}
                                onPress={(checkboxValue) => selectedItem(item, checkboxValue)}
                            />)}
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
            <Text>{props.food.description}</Text>
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