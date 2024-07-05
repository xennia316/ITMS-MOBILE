import React, { useState } from "react";
import { View, Text, Image, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import backIcon from "../assets/icons/arrowleft.png";
import userIcon from "../assets/icons/Vector.png";

const SignUp = () => {
  return (
    <View className="py-14 px-8 flex-1 bg-primary flex-col items-center gap-y-4">
      <View className="flex-row w-full items-center justify-between pt-6 pb-6">
        <Image className="w-8 h-8" source={backIcon} />
        <Text className="font-semibold color-white text-4xl text-center">
          Sign Up
        </Text>
        <View className="w-8 h-8"></View>
      </View>
      <View className="w-full flex-col gap-y-4">
        <View className="flex-col gap-y-2">
          <Text className="text-white text-xl">Username</Text>
          <View className="flex-row border-gray-700 border-2 rounded-xl p-2">
            <View className="pl-1 pr-3">
              <Image className="w-5 h-7" source={userIcon} />
            </View>
            <TextInput
              placeholder="Username"
              className="text-lg color-white"
              placeholderTextColor="#676666"
            />
          </View>
        </View>
        <View className="flex-row w-full justify-between">
          <View className="flex-col w-12/25 gap-y-2">
            <Text className="text-white text-xl">First Name</Text>
            <View className="flex-row border-gray-700 border-2 rounded-xl p-2">
              <View className="pl-1 pr-3">
                <Image className="w-5 h-7" source={userIcon} />
              </View>
              <TextInput
                placeholder="First Name"
                className="text-lg color-white"
                placeholderTextColor="#676666"
              />
            </View>
          </View>
          <View className="flex-col w-12/25 gap-y-2">
            <Text className="text-white text-xl">Last Name</Text>
            <View className="flex-row border-gray-700 border-2 rounded-xl p-2">
              <View className="pl-1 pr-3">
                <Image className="w-5 h-7" source={userIcon} />
              </View>
              <TextInput
                placeholder="Last Name"
                className="text-lg color-white"
                placeholderTextColor="#676666"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
