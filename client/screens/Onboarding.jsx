import React, { useState } from "react";
import { View, Text, Image, Touchable, TouchableOpacity } from "react-native";
import Image1 from "../assets/onboarding/Car driving-bro.png";
import Image2 from "../assets/onboarding/City driver-bro.png";
import Image3 from "../assets/onboarding/City driver-pana.png";
import progress1 from "../assets/onboarding/progress-1.png";
import progress2 from "../assets/onboarding/progress-2.png";
import progress3 from "../assets/onboarding/progress-3.png";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    "Drive smarter knowing the best route and time to go",
    "Get real-time traffic information and avoid congested roads",
    "Start planning your trips and save time on the road",
  ];

  const progressObj = [progress1, progress2, progress3];

  const dotClassName = (index) => {
    if (currentIndex === index) return `bg-white rounded-full w-10 h-4`;
    else return `bg-[#676666] rounded-full w-4 h-4`;
  };

  const navigateToHome = () => {
    navigation.replace("Home");
  };

  const images = [Image1, Image2, Image3];
  return (
    <View className="py-14 px-6 flex-1 bg-primary flex-col justify-between items-center">
      <View className="items-end w-full">
        <TouchableOpacity onPress={() => navigateToHome()}>
          <Text className="text-[#80F17E] text-lg">Skip</Text>
        </TouchableOpacity>
      </View>
      <View className="w-full h-1/2 justify-end">
        <Image className="w-full h-60" source={images[currentIndex]} />
      </View>
      <View className="">
        <Text className="text-white text-5xl">{texts[currentIndex]}</Text>
      </View>
      <View className="w-full flex-row justify-between items-center px-3">
        <View className="flex-row gap-x-2">
          <View className={dotClassName(0)}></View>
          <View className={dotClassName(1)}></View>
          <View className={dotClassName(2)}></View>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (currentIndex === 2) {
              setCurrentIndex(0);
              navigateToHome();
            } else setCurrentIndex(() => currentIndex + 1);
          }}
        >
          <View className="w-20">
            <Image className="w-full h-20" source={progressObj[currentIndex]} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
