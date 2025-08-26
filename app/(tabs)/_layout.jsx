import { Tabs } from 'expo-router';    
import React from 'react'  
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, ImageBackground } from 'react-native';

import { icons } from '../../constants';
import { images } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="flex items-center justify-center gap-1">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text
                className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
                style={{ color: color }}
                >
                    {name}
            </Text>
        </View>
    );
};

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions= {{
            tabBarActiveTintColor: '#FFA001',
            tabBarInactiveTintColor: '#CDCDE0',
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#161622',
                // borderTopWidth: 1,
                // borderTopColor: '#232522',
                height: 84,
            },
        }}>
        <Tabs.Screen 
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <TabIcon 
                  icon={icons.home}
                  color={color}
                  name="Home"
                  focused={focused}
                />
            ),
          }}
        />
         <Tabs.Screen 
          name="add"
          options={{
            title: "Add",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <TabIcon 
                  icon={icons.create}
                  color={color}
                  name="Add"
                  focused={focused}
                />
            ),
          }}
        />
        <Tabs.Screen 
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <TabIcon 
                  icon={icons.profile}
                  color={color}
                  name="Profile"
                  focused={focused}
                />
            ),
          }}
        />
      </Tabs>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  )
}

export default TabLayout;