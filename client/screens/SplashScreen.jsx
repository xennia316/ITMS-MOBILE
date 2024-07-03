import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import SplashImg from "../assets/splash.png";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding"); // Navigate to the Home screen
    }, 2000); // 3 seconds

    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, [navigation]);

  return (
    <View className="items-center justify-center flex-1 bg-primary">
      <Image source={SplashImg} />
    </View>
  );
};

export default SplashScreen;
