import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

import { icons } from '../constants'

const FormField = (
    {
        title,
        value,
        placeholder, 
        handleChangeText,
        otherStyles,
        ...props
    }
) => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`${otherStyles}`} style={styles.mainCon}>
      <Text
        style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            color: 'white'
        }}>{title}</Text>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({})