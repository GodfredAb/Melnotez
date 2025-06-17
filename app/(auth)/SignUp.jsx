import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, Dimensions, Alert, Image } from 'react-native'
import { Link } from 'expo-router'

import { FormField, Button } from '../../component'

const SignUp = () => {


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          style={{
            minHeight: Dimensions.get("window").height - 100,
            width: 'full',
            height: 'full',
            padding: 4,
            marginTop: 6,
            direction: 'flex',
            JustifyContent: 'center'
          }}
        >

          <Text 
            style={{
              fontSize: 30,
              fontFamily: 'Poppins-SemiBold',
              color: 'white',
              marginTop: 10
            }}
          >
            Sign Up to PriMuse
          </Text>

          <FormField
            title="Username"
           // value={form.username}
            //handleChangeText={(e) => setForm({ ...form, username: e })}
           // otherStyles="mt-10"
          />

          <FormField
            title="Email"
           // value={form.email}
            //handleChangeText={(e) => setForm({ ...form, email: e })}
            //otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
           // value={form.password}
           // handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={{
              
            }}
          />

          <Button
            title="Sign Up"
           // handlePress={submit}
          //  containerStyles="mt-7"
           // isLoading={isSubmitting}
          />

          <View 
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: 5,
              flexDirection: 'row',
              gap: 2
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: 'font-pregular'
              }}
            >
              Have an account already?
            </Text>
            <Link
              href="/Sign in"
              style={{
                color: 'white',
                fontFamily: "font-psemibold",
                fontSize: 10
              }}
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})