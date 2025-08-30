import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

const instrumentOptions = [
  { id: 1, instruments: ["Vocals", "Instrumental"], isLocked: false },
  { id: 2, instruments: ["Vocals", "Drums", "Bass", "Other"], isLocked: false },
  { id: 3, instruments: ["Vocals", "Drums", "Bass", "Guitar", "Other"], isLocked: true },
  { id: 4, instruments: ["Vocals", "Drums", "Bass", "Piano", "Other"], isLocked: true },
  { id: 5, instruments: ["Vocals", "Drums", "Bass", "Guitar", "Piano", "Other"], isLocked: true },
];

const Create = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  return (
    <View className="flex-1 bg-white">
      {/* Fake Status Bar */}
      <View className="h-6 bg-white" />

      {/* Header */}
      <View className="flex-row items-center px-4 py-3 border-b border-gray-200">
        <TouchableOpacity onPress={() => console.log("Back pressed")}>
          <Text className="text-blue-500 font-medium">Back</Text>
        </TouchableOpacity>
        <Text className="flex-1 text-center text-lg font-semibold">
          Instruments
        </Text>
        <View className="w-12" /> {/* spacer for symmetry */}
      </View>

      {/* Content */}
      <ScrollView
        contentContainerStyle={{ paddingVertical: 24 }}
        className="flex-1 px-4"
      >
        {instrumentOptions.map((option) => {
          const isSelected = selectedOption === option.id;

          return (
            <TouchableOpacity
              key={option.id}
              disabled={option.isLocked}
              onPress={() => !option.isLocked && setSelectedOption(option.id)}
              className={`p-4 rounded-2xl mb-4 border 
                ${isSelected ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white"} 
                ${option.isLocked ? "opacity-50" : ""}`}
            >
              <Text className="font-semibold mb-2">Option {option.id}</Text>
              <Text>{option.instruments.join(", ")}</Text>
              {isSelected && <Text className="text-blue-500 mt-2">✓ Selected</Text>}
              {option.isLocked && <Text className="text-red-500 mt-2">Locked</Text>}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Continue Button */}
      <View className="p-4 pb-8">
        <TouchableOpacity
          onPress={() => console.log("Continue pressed")}
          className="bg-blue-500 py-4 rounded-2xl items-center"
        >
          <Text className="text-white font-semibold text-lg">Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Dots */}
      <View className="flex-row justify-center space-x-3 pb-6">
        {[1, 2, 3].map((dot) => (
          <View
            key={dot}
            className={`w-2 h-2 rounded-full ${
              dot === 2 ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default Create;
