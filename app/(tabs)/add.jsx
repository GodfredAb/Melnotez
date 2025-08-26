import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FolderOpen, Image as ImageIcon, Mic } from "lucide-react-native";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { Audio } from "expo-av";

const Add = () => {
  // Pick files from local storage
  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["audio/*", "video/*"],
      });
      if (result.type !== "cancel") {
        console.log("Picked file:", result);
      }
    } catch (error) {
      console.error("Error picking file:", error);
    }
  };

  // Pick from gallery
  const pickGallery = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
      });
      if (!result.canceled) {
        console.log("Picked from gallery:", result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking gallery:", error);
    }
  };

  // Record audio
  const recordAudio = async () => {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Microphone permission is required!");
        return;
      }

      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recording.startAsync();

      alert("Recording started. Stop recording from your logic.");
      console.log("Recording object:", recording);
    } catch (error) {
      console.error("Error recording audio:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#161622]">
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        {/* Header */}
        <View className="flex-row items-center gap-4 mb-6">
          <Text className="text-xl font-bold text-white">Import a song</Text>
        </View>

        {/* Promotional Banner */}
        <View className="bg-[#1E1E2D] rounded-2xl p-6 mb-8 relative overflow-hidden">
          <Text className="text-white text-sm mb-2">Don't miss this chance</Text>
          <Text className="text-white text-xl font-bold mb-4">
            Get Melnotez Max for free! 🎁
          </Text>
          <Pressable className="bg-[#FFA001] rounded-xl px-6 py-3">
            <Text className="text-white font-semibold text-center">
              Start free trial
            </Text>
          </Pressable>
          <View className="absolute right-4 top-4 w-16 h-16 bg-gray-500 rounded-xl opacity-30" />
        </View>

        {/* Import Options */}
        <View className="space-y-4">
          {/* Files */}
          <Pressable
            onPress={pickFile}
            className="flex-row items-center gap-4 p-4 bg-[#1E1E2D] rounded-2xl"
          >
            <View className="w-12 h-12 bg-blue-500 rounded-xl items-center justify-center">
              <FolderOpen size={24} color="white" />
            </View>
            <View className="flex-1">
              <Text className="text-white font-semibold">Files</Text>
              <Text className="text-gray-400 text-sm">
                Files app, Google Drive, Dropbox...
              </Text>
            </View>
          </Pressable>

          {/* Gallery */}
          <Pressable
            onPress={pickGallery}
            className="flex-row items-center gap-4 p-4 bg-[#1E1E2D] rounded-2xl"
          >
            <View className="w-12 h-12 bg-purple-500 rounded-xl items-center justify-center">
              <ImageIcon size={24} color="white" />
            </View>
            <View className="flex-1">
              <Text className="text-white font-semibold">Gallery</Text>
              <Text className="text-gray-400 text-sm">
                Any video from your device's gallery.
              </Text>
            </View>
          </Pressable>

          {/* Record Audio */}
          <Pressable
            onPress={recordAudio}
            className="flex-row items-center gap-4 p-4 bg-[#1E1E2D] rounded-2xl"
          >
            <View className="w-12 h-12 bg-[#FFA001] rounded-xl items-center justify-center">
              <Mic size={24} color="white" />
            </View>
            <View className="flex-1">
              <Text className="text-white font-semibold">Record audio</Text>
              <Text className="text-gray-400 text-sm">
                Record a song using your microphone
              </Text>
            </View>
          </Pressable>
        </View>

        {/* Supported Formats */}
        <View className="mt-8 items-center">
          <Text className="text-gray-400 text-sm mb-2">Supported formats</Text>
          <Text className="text-gray-500 text-xs">
            M4A, MP3, AAC, MP4, OGG, ALAC, FLAC, WAV...
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Add;
