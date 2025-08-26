import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Gift,
  MessageSquare,
  FileText,
  Shield,
  LogIn,
  ChevronRight,
} from "lucide-react-native";

const Profile = () => {
  const menuItems = [
    {
      icon: Gift,
      title: "App Bundle Offer",
      subtitle: "Activate now",
      showChevron: true,
    },
    {
      icon: MessageSquare,
      title: "Contact Us",
      subtitle: null,
      showChevron: false,
    },
    {
      icon: FileText,
      title: "Terms of Use",
      subtitle: null,
      showChevron: false,
    },
    {
      icon: Shield,
      title: "Privacy Policy",
      subtitle: null,
      showChevron: false,
    },
    {
      icon: LogIn,
      title: "Log in",
      subtitle: null,
      showChevron: false,
      color: "#FFA001", // custom color for "Log in"
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#161622]">
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        {/* Header */}
        <Text className="text-2xl font-bold text-white mb-6">Settings</Text>

        {/* Promotional Banner */}
        <View className="bg-[#1E1E2D] rounded-2xl p-6 mb-8 relative overflow-hidden">
          <Text className="text-white text-sm mb-2">Don't miss this chance</Text>
          <Text className="text-white text-xl font-bold mb-4">
            Get Stemz Max for free! 🎁
          </Text>
          <Pressable className="bg-[#FFA001] rounded-xl px-6 py-3">
            <Text className="text-white font-semibold text-center">
              Start free trial
            </Text>
          </Pressable>
          <View className="absolute right-4 top-4 w-16 h-16 bg-gray-500 rounded-xl opacity-30" />
        </View>

        {/* Menu Items */}
        <View className="space-y-1">
          {menuItems.map((item, index) => (
            <View
              key={index}
              className="flex-row items-center justify-between py-4 px-2"
            >
              <View className="flex-row items-center gap-4">
                <item.icon
                  size={20}
                  color={item.color || "#9CA3AF"}
                />
                <Text
                  className="text-base"
                  style={{ color: item.color || "white" }}
                >
                  {item.title}
                </Text>
              </View>

              <View className="flex-row items-center gap-2">
                {item.subtitle && (
                  <Text className="text-gray-400 text-sm">{item.subtitle}</Text>
                )}
                {item.showChevron && (
                  <ChevronRight size={16} color="#9CA3AF" />
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
