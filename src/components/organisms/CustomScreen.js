import { StyleSheet, Text, View ,ImageBackground} from 'react-native'
import React from 'react'

const CustomScreen = () => {
  return (
    <ImageBackground
    source={require("../../assets/images/backgroundImageSound.jpg")}
    style={{ width: "100%", height: "100%" }}
    blurRadius={1}>
    
 
 
    </ImageBackground>
  )
}

export  {CustomScreen}

const styles = StyleSheet.create({})