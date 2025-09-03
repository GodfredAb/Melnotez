import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FolderOpen, Image as ImageIcon, Mic } from "lucide-react-native";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { Audio } from "expo-av";


const Add = () => {


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
        <Text className="text-xl font-bold text-white mb-6">Import a song</Text>

        {/* Files */}
        <Pressable onPress={pickFile} className="flex-row items-center gap-4 p-4 bg-[#1E1E2D] rounded-2xl">
          <FolderOpen size={24} color="white" />
          <Text className="text-white">Files</Text>
        </Pressable>

        {/* Gallery */}
        <Pressable onPress={pickGallery} className="flex-row items-center gap-4 p-4 bg-[#1E1E2D] rounded-2xl">
          <ImageIcon size={24} color="white" />
          <Text className="text-white">Gallery</Text>
        </Pressable>

        {/* Record Audio */}
        <Pressable onPress={recordAudio} className="flex-row items-center gap-4 p-4 bg-[#1E1E2D] rounded-2xl">
          <Mic size={24} color="white" />
          <Text className="text-white">Record audio</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Add;
