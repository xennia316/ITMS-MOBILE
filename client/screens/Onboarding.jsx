import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Image1 from "../assets/onboarding/Car driving-bro.png";
import Image2 from "../assets/onboarding/City driver-bro.png";
import Image3 from "../assets/onboarding/City driver-pana.png";
import progress1 from "../assets/onboarding/progress-1.png";
import progress2 from "../assets/onboarding/progress-2.png";
import progress3 from "../assets/onboarding/progress-3.png";

const Onboarding = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    "Drive smarter knowing the best route and time to go",
    "Get real-time traffic information and avoid congested roads",
    "Start planning your trips and save time on the road",
  ];

  const progressObj = [progress1, progress2, progress3];

  const navigateToHome = () => {
    navigation.replace("Home");
  };

  const images = [Image1, Image2, Image3];

  return (
    <View style={styles.container}>
      <View style={styles.skipButton}>
        <TouchableOpacity onPress={() => navigateToHome()}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={images[currentIndex]} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{texts[currentIndex]}</Text>
      </View>
      <View style={styles.dotsContainer}>
        <View style={styles.dotRow}>
          {progressObj.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>
        <TouchableOpacity
          onPress={() => {
            if (currentIndex === 2) {
              setCurrentIndex(0);
              navigateToHome();
            } else {
              setCurrentIndex(currentIndex + 1);
            }
          }}
          style={styles.progressButton}
        >
          <Image
            source={progressObj[currentIndex]}
            style={styles.progressImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    paddingVertical: "15%",
    paddingHorizontal: "5%", // Adjust horizontal padding if needed
    flex: 1,
    backgroundColor: "#1C2129", // Assuming you have a primary color defined
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  skipButton: {
    alignSelf: "flex-end",
  },
  skipText: {
    color: "#80F17E",
    fontSize: 18,
  },
  imageContainer: {
    width: "100%",
    justifyContent: "flex-end",
    flex: 1,
  },
  image: {
    width: "auto",
    height: "50%",
  },
  textContainer: {
    height: "20%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 31,
    fontWeight: "bold",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  dotRow: { flexDirection: "row", gap: 5 },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 50,
  },
  dotActive: {
    backgroundColor: "white",
    width: 36,
  },
  dotInactive: {
    backgroundColor: "#676666",
  },
  progressButton: {
    width: 70, // Adjust width if needed
  },
  progressImage: {
    width: "100%",
    height: 70,
  },
});
