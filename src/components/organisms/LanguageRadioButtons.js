import { StyleSheet, View } from "react-native";
import React,{useState} from "react";
import { Radio, Text, Center, NativeBaseProvider, Button } from "native-base";
import {
  scale,
  ScaledSheet,
  moderateScale,
  verticalScale,
} from "react-native-size-matters";
import navigationStrings from "../../navigation/navigationStrings";



const LanguageRadioButtons = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(6);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const languages = [
    { id: 1, name: 'Dutch' },
    { id: 2, name: 'French' },
    { id: 3, name: 'German' },
    { id: 4, name: 'Irish' },
    { id: 5, name: 'Italian' },
    { id: 6, name: 'English' },
    { id: 7, name: 'Hindi' },
    { id: 8, name: 'Urdu' },
  ];

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View>
        <Text
          fontSize={scale(20)}
          fontWeight={"bold"}
          textAlign={"center"}
          color={"#334a4d"}
        >
          Pick your Language
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          padding: 10,
          borderRadius: 10,
          backgroundColor: "white",
          elevation: 10,
        }}
      >
       <Radio.Group
  defaultValue="6"
  name="myRadioGroup"
  accessibilityLabel="Pick your favorite number"
  onChange={(id) => {
    const language = languages.find((lang) => lang.id === Number(id))?.name || '';
    setSelectedId(id);
    setSelectedLanguage(language);
  }}
  
>
        <Radio  value="1" my={4}>
          Dutch
        </Radio>
        <Radio value="2" my={4}>
          French
        </Radio>
        <Radio value="3" my={4}>
          German
        </Radio>
        <Radio value="4" my={4}>
          Irish
        </Radio>
        <Radio value="5" my={4}>
          Italian
        </Radio>
        <Radio value="6" my={4}>
          English
        </Radio>
        <Radio value="7" my={4}>
          Hindi
        </Radio>
        <Radio value="8" my={4}>
          Urdu
        </Radio>
      </Radio.Group>
   <Button
  onPress={() =>
    navigation.navigate(navigationStrings.Home, {
      selectedId: selectedId,
      selectedLanguage: selectedLanguage,
    })
   
  }
  colorScheme={"emerald"}
  >
  Continue
</Button>

      </View>
    </View>
  );
};

export { LanguageRadioButtons };

const styles = ScaledSheet.create({});
