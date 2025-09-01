import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";

const instrumentOptions = [
  { id: 1, instruments: ["Lyrics", "Chords"], isLocked: false },
  { id: 2, instruments: ["Lyrics", "Drums", "Bass", "Chords"], isLocked: false },
];

const Create = () => {
  const { id } = useLocalSearchParams();
  const { songs } = useGlobalContext();   // ✅ correct usage of GlobalProvider
  const song = songs.find((s) => String(s.id) === id);

  const [selectedOption, setSelectedOption] = useState(1);

  const handleAnalyze = async () => {
    if (!song) return Alert.alert("Error", "No song selected!");

    let formData = new FormData();
    formData.append("file", {
      uri: song.uri,
      type: "audio/mpeg", // adjust if you allow other formats
      name: song.name,
    });
    formData.append("option", selectedOption);

    try {
      const res = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = await res.json();
      console.log("Analysis:", data);
      Alert.alert("Result", JSON.stringify(data, null, 2));
    } catch (err) {
      console.error("Error analyzing:", err);
      Alert.alert("Error", "Failed to analyze song");
    }
  };

  return (
    <View className="flex-1 bg-[#161622]">
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text className="text-white text-lg mb-4">
          Analyzing: {song?.name || "No song selected"}
        </Text>

        {instrumentOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            onPress={() => setSelectedOption(option.id)}
            className={`p-4 rounded-2xl mb-4 border ${
              selectedOption === option.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 bg-white"
            }`}
          >
            <Text className="font-semibold mb-2">Option {option.id}</Text>
            <Text>{option.instruments.join(", ")}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={handleAnalyze}
          className="bg-blue-500 py-4 rounded-2xl items-center mt-6"
        >
          <Text className="text-white font-semibold text-lg">Analyze</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Create;
