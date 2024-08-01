import React from "react";
import { View } from "react-native";
import BottomNav from "../components/bottomNav";

const LandingPage = () => {
	return (
		<View className={"w-screen h-screen bg-primary"}>
			<BottomNav />
		</View>
	);
};

export default LandingPage;
