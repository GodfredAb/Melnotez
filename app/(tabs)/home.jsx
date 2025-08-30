import React, { useState } from "react";
import { View, Text, Pressable, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Music, MoreVertical } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";



import { router } from "expo-router";



const Home = () => {
  const navigation = useNavigation();
  const [songs, setSongs] = useState([
    { id: 1, name: "AUD-20250607-WA006.m4a" },
  ]);

  const handleRename = (id) => {
    Alert.prompt(
      "Rename Song",
      "Enter new name for your file:",
      (newName) => {
        if (newName) {
          setSongs((prev) =>
            prev.map((s) => (s.id === id ? { ...s, name: newName } : s))
          );
        }
      }
    );
  };

  const handleDelete = (id) => {
    Alert.alert("Delete Song", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setSongs((prev) => prev.filter((s) => s.id !== id));
        },
      },
    ]);
  };

  const handleMenu = (id) => {
    Alert.alert("Options", "", [
      { text: "Rename", onPress: () => handleRename(id) },
      { text: "Delete", onPress: () => handleDelete(id), style: "destructive" },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#161622]">
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        {/* Header */}
        <Text className="text-2xl font-bold text-white mb-6">Library</Text>

        {/* Sync Library Card */}
        <View className="bg-[#1E1E2D] rounded-2xl p-6 mb-6">
          <Text className="text-gray-300 text-sm mb-4 text-center">
            Sync your library and use Stemz on all your devices: phones, tablets
            & desktop
          </Text>
          <Pressable className="bg-[#FFA001] rounded-xl px-6 py-3">
            <Text className="text-white font-semibold text-center">
              Sync my library
            </Text>
          </Pressable>
        </View>

        {/* Uploaded Songs */}
        {songs.map((song) => (
          <View
            key={song.id}
            className="flex-row items-center justify-between py-4"
          >
            {/* Left icon → Navigate to Create */}
            <Pressable
              className="flex-row items-center gap-4"
              onPress={() => router.push("/innerRoutes/Create")}
            >
              <Music size={20} color="#9CA3AF" />
              <Text className="text-gray-200 text-sm font-medium">
                {song.name}
              </Text>
            </Pressable>

            {/* 3 Dots Menu */}
            <Pressable onPress={() => handleMenu(song.id)}>
              <MoreVertical size={20} color="#9CA3AF" />
            </Pressable>
          </View>
        ))}


          <StatusBar barStyle="light-content" translucent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
