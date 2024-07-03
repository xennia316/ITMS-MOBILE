import React from "react";
import { View } from "react-native";

const Body = ({ children }) => {
  return <View className="bg-primary w-screen h-screen px-14 py-10">{children}</View>;
};

export default Body;
