import { View, Text, Image } from 'react-native'
import React from 'react'

export default function About() {
    const name = "Beachside Bar"
    const desc = "Thai * comfort Food * $$ * $$ * 4 .. (2913+) *"
    const image =
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg"

    return (
        <View>
            <RestauantImage image={image} />
            <RestauantName name={name} />
            <RestauantDescription desc={desc} />
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