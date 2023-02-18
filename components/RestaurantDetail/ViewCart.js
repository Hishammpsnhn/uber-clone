import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ViewCart() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                position: "absolute",
                bottom: 20,
                zIndex: 999,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                <TouchableOpacity
                    style={{
                        marginTop: 20,
                        backgroundColor: "black",
                        padding: 15,
                        alignItems:"center",
                        borderRadius: 30,
                        width: 300,
                        position: "relative",
                    }}
                    // onPress={() => setModalVisible(true)}
                    >
                    <Text style={{ color: "white", fontSize: 20,  }}>
                        View Cart
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}