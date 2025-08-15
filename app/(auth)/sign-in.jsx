import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Image, Dimensions } from "react-native";

import { images } from "../../constants";
import { FormField, CustomButton } from "../../components";

const SignIn = () => {

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View
                    className="w-full flex justify-center h-full px-4 my-6"
                    style={{ 
                        minHeight: Dimensions.get("window").height -100,
                    }}
                >
                    <Image 
                        source={images.logo}
                        resizeMode="contain"
                        className="w-[115px] h-[34px]"
                    />

                    <Text className="text-2xl font-semibold text-white mt-10 font-psemibol">
                        Log in to Melnotez
                    </Text>

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => SVGAnimateTransformElement({...form, email: e})}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />    
                
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />

                    <CustomButton
                        title="Sign In"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn;