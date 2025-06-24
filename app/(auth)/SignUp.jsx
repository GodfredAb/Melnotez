import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrowView, Dimensions, Alert, Image } from 'react-native'

import { FormField, Button } from '../../component'


const SignUp = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View 
        style={{
            minHeight: Dimensions.get("window").height - 100,
            width: 'full',
            height: 'full',
            padding: 4,
            marginTop: 6,
            direction: 'flex',
            justifyContent: 'center'
        }}>
            <Text
                style={{
                    fontSize: 30,
                    fontFamily: 'Poppins-SemiBold',
                    color: 'white',
                    marginTop: 10
                }}>SignUp to Melnotez</Text>
        </View>
      
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    safeAreaView : {
        backgroundColor: 'primary',
        height: '100%',
    }
})