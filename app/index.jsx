//Home Page
import { ImageBackground, ScrollView, StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context'


import { images } from '../constants'
import { Button } from '../component'

const Welcome = () => {
  return (
    <SafeAreaView
      style={{
        height: 'full',
        backgroundColor: 'black'
      }}
    >
      <ImageBackground source={images.indexH} resizeMode="cover" />

      <View style={{
        width: 240,
        height: 84,
        marginTop: 43,
        marginLeft: 115
      }}>
        <Text 
          style={{
            fontSize: 40,
            color: 'black',
            fontWeight: 600,
            lineHeight: 75,
            fontFamily: 'Poppins-SemiBold'
          }}>
            MelNotez
          </Text>
      </View>

      <View 
      style={{
        width: 285,
        height: 70,
        marginTop: 350,
        marginLeft: 52, 
        borderRadius: 30
      }}
      >
        <Text
        style={{
          fontSize: 25, 
          color: 'black',
          fontWeight: 600,
          lineHeight: 30,
          fontFamily: 'Poppins-Regular'
        }}
        >
          Enjoy Listening to Music
        </Text>
      </View>

      <View>
        <Button 
        title='Sign Up'
        handlePress={()=>router.push("/SignUP")}
        style={styles.containerStyles}
        />
        <Button 
        title='Sign In'
        handlePress={()=>router.push("/SignIn")}
        style={styles.containerStyles}
        />
      </View>
    </SafeAreaView>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: 'center'
  },
  containerStyles: {
    width: 'full',
    marginTop: 7,
  }
})

