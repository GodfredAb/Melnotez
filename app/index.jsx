import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Text, View } from "react-native";

const Welcome = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Welcome to Melnotez!</Text>
        <Link href="/(auth)/sign-in">
          <Text style={{ marginTop: 16, color: "#007AFF" }}>Sign In</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;