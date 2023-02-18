import { View, Text, Image } from 'react-native'
import React from 'react'

export default function About({ props }) {
    const { name, image, categories, price, reviews, rating } = props.route.params;
    const formattedCategories = categories.map((cat) => cat.title).join(" • ");
    const description = `${formattedCategories} ${price ? " • " + price : ""
        } • 🎫 • ${rating} ⭐ (${reviews}+)`;
    return (
        <View>
            <RestauantImage image={image} />
            <RestauantName name={name} />
            <RestauantDescription desc={description} />
        </View>
    )
}

const RestauantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
)

const RestauantName = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
    }}>{props.name}</Text>
)
const RestauantDescription = (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
    }}>{props.desc}</Text>
)