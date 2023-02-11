import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import Searching from '../components/Searching'
import Catagories from '../components/Catagories'


export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <Searching />
      </View>
      <Catagories />
    </SafeAreaView>
  )
}