import React, { useState } from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import { Body } from "../layout";
import SplashImg from "../assets/splash.png";
import Image1 from "../assets/onboarding/Car driving-bro.png";
import Image2 from "../assets/onboarding/City driver-bro.png";
import Image3 from "../assets/onboarding/City driver-pana.png";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    "Drive smarter knowing the best route and time to go",
    "Get real-time traffic information and avoid congested roads",
    "Start planning your trips and save time on the road",
  ];

  const images = [Image1, Image2, Image3];
  return (
    <View className="py-14 px-6 flex-1 bg-primary flex-col justify-between items-center">
      <View className="flex-1 items-end w-full">
        <TouchableOpacity>
          <Text className="text-[#80F17E] text-lg">Skip</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1 w-full">
        <Image className="w-full h-60" source={images[currentIndex]} />
      </View>
      <View>
        <Text className="text-white text-5xl">{texts[currentIndex]}</Text>
      </View>
      <View></View>
    </View>
  );
};

export default Onboarding;
