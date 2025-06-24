import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react'

const Button = (
    {
        title,
        handlePress,
        containerStyles,
        textStyles,
        isLoading
    }
) => {
    return (
        <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        style={styles.customButton}
        className={`${containerStyles}}
            isLoading ? style = {{opacity: 50} : ""`}
        disabled={isLoading}
        >
            <Text
            style={{
                color: 'white', 
                fontFamily: 'Poppins-Regular',
                fontSize: 18
            }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    customButton: {
        backgroundColor: '#6C15A2',
        borderRadius: 30,
        minHeight: 50,
        direction: 'flex',
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
        margin: 8,
    },
})