import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { MainScreenTabs } from "../../containers/MainScreenTabs" 

export const Home = ({route}) => {
  const { selectedId, selectedLanguage } = route?.params;
  console.log("route",selectedId,selectedLanguage)

  return (
<MainScreenTabs/>
  )
}

const styles = StyleSheet.create({})
