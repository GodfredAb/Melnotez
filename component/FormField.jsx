import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`${otherStyles}`} style={styles.mainCon}>
      <Text 
        style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            color: white,

        }}
      >{title}</Text>

      <View 
      style={{
        width: 'full',
        height: 16,
        padding: 4,
        backgroundColor: "#8238B0",
        borderRadius: 20,
        borderColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center"
      }}
      >
        <TextInput
          style={{
            display: 'flex', 
            flex: 1,
            color: 'white',
            fontSize: 16,
            fontFamily: 'Poppins-SemiBold'
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
    mainCon: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    }

})