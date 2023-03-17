import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LanguageRadioButtons } from '../../components/organisms/LanguageRadioButtons' 


const LanguageScreen = ({navigation}) => {
  return (
 <LanguageRadioButtons navigation={navigation}/>
  )
}

export  {LanguageScreen}

const styles = StyleSheet.create({})