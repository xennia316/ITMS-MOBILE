import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../assets/home.png";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View className="py-14 px-8 flex-1 bg-primary flex-col justify-between items-center">
      <View className="w-full h-3/5 justify-end">
        <Image className="w-full h-60" source={image} />
      </View>
      <Text className="text-white text-5xl font-bold">Get Started!</Text>
      <View className="w-full flex-col justify-end gap-y-4">
        <Pressable
          onPress={() => navigation.replace("SignUp")}
          className="bg-white justify-center items-center p-4 rounded-full"
        >
          <Text className="text-xl font-bold color-[#1C2129]">
            Create Account
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.replace("SignIn")}
          className="bg-primary justify-center items-center p-4 border-white rounded-full border-2"
        >
          <Text className="text-xl font-bold color-[#80F17E]">Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
