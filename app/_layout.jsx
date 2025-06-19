//Present in all our routes
import { StyleSheet } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from 'expo-font'
import { useEffect } from "react";



//prevent the splash Screen from auto-hiding before assets loading is complete
// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  


  return (
    <Stack>
      <Stack.Screen names='index' options={{headerShown: false}} />
    </Stack>
  )
}

export default RootLayout;