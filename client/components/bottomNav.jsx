import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const BottomNav = () => {
	return (
		<View
			className={
				"bg-red-800 h-32 self-end w-screen flex-row justify-evenly items-center"
			}
		>
			<TouchableOpacity>
				<Text>Home</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text>Location</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text>Profile</Text>
			</TouchableOpacity>
		</View>
	);
};

export default BottomNav;
