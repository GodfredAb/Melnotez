import { StyleSheet, Text, View } from "react-native";
import { Redirect, Stack } from 'expo-router'
import { StatusBar } from "expo-status-bar";


const AuthLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                name='SignUp'
                options={{
                    headerShown: false,
                }}
                />
                <Stack.Screen 
                name='SignIn'
                options={{
                    headerShown: false,
                }}
                />
            </Stack>
        </>
    )
}

export default AuthLayout

const styles = StyleSheet.create({})