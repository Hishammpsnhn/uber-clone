import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery")
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderTabButton
        text="Delivery"
        textColor="white"
        bgColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab} />
      <HeaderTabButton
        text="Pickup"
        textColor="black"
        bgColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab} />
    </View>
  )
}
const HeaderTabButton = (props) => (
  <TouchableOpacity style={{
    backgroundColor: props.activeTab === props.text ? "black" : "white",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,

  }}
    onPress={() => props.setActiveTab(props.text)} >
    <Text style={{
      color: props.activeTab === props.text ? "white" : "black",
      fontSize: 15,
      fontWeight: "900"
    }}>
      {props.text}
    </Text>
  </TouchableOpacity>
)