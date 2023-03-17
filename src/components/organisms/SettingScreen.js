import { StyleSheet,  View } from 'react-native'
import React from 'react'
import {
    scale,
    verticalScale,
    moderateScale,
    s,
  } from "react-native-size-matters";
  import {

    Text,
   
  } from "native-base";
const SettingScreen = () => {
  return (
    <View 
    style={styles.container}
    >
    <View  style={styles.inner}>
        
      <Text fontWeight={'bold'} fontSize={scale(17)} color={"#43494b"}>Go Premium</Text>
    </View>
     <View  style={styles.inner}>
        
      <Text  fontWeight={'bold'} fontSize={scale(17)} color={"#43494b"}>Manage Subscriptions</Text>
    </View> 
    <View  style={styles.inner}>
        
      <Text fontWeight={'bold'} fontSize={scale(17)} color={"#43494b"}>FAQ</Text>
    </View>
     <View  style={styles.inner}>
        
      <Text fontWeight={'bold'} fontSize={scale(17)} color={"#43494b"}>Privacy Policy</Text>
    </View>
     <View  style={styles.inner}>
        
      <Text fontWeight={'bold'} fontSize={scale(17)} color={"#43494b"}>Credit </Text>
    </View>
     <View  style={styles.inner}>
        
      <Text fontWeight={'bold'} fontSize={scale(17)} color={"#43494b"}>Feedback</Text>
    </View>
   
    </View>
  )
}

export  {SettingScreen}

const styles = StyleSheet.create({

    container:{
        flex:1,
        // borderWidth:1
    },
    inner:{
padding:scale(20),
borderBottomWidth:1,
borderBottomColor:"#b1b1b1"
    }
})