import React, { useState } from "react";
import {
	View,
	Text,
	Image,
	Pressable,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import backIcon from "../assets/icons/arrowleft.png";
import userIcon from "../assets/icons/Vector.png";
import infoIcon from "../assets/icons/info-circle.png";
import passwordIcon from "../assets/icons/password.png";

const SignIn = () => {
	const navigation = useNavigation();
	return (
		<ScrollView className="flex-1 bg-primary">
			<View className="h-screen py-14 px-8 flex-1 flex-col items-center gap-y-4">
				<View className="flex-row w-full items-center justify-between pt-6 pb-6">
					<Pressable onPress={() => navigation.navigate("Home")}>
						<View className="w-[24] h-[24] items-center justify-center">
							<Image className="h-full w-full" source={backIcon} />
						</View>
					</Pressable>
					<Text className="font-semibold color-white text-4xl text-center">
						Sign In
					</Text>
					<View className="w-8 h-8"></View>
				</View>
				<View className="w-full flex-col gap-y-4">
					<View className="flex-col gap-y-2">
						<Text className="text-white text-xl">Username</Text>
						<View className="flex-row border-gray-700 border-2 rounded-xl p-2 items-center">
							<View className=" w-[14] h-[20]">
								<Image className="w-full h-full" source={userIcon} />
							</View>
							<TextInput
								placeholder="Username"
								className="text-lg color-white pl-2 flex-1"
								placeholderTextColor="#676666"
							/>
						</View>
					</View>
					<View className="flex-col gap-y-2">
						<Text className="text-white text-xl">Password</Text>
						<View className="flex-row border-gray-700 border-2 rounded-xl p-2 items-center">
							<View className=" w-[18] h-[20]">
								<Image className="w-full h-full" source={passwordIcon} />
							</View>
							<TextInput
								placeholder="Password"
								className="text-lg color-white pl-2 flex-1"
								placeholderTextColor="#676666"
								type="password"
							/>
						</View>
						<View className="flex-row items-center gap-x-2">
							<View className="w-[15] h-[15]">
								<Image className="w-full h-full" source={infoIcon} />
							</View>
							<TouchableOpacity>
								<Text className="color-[#BABABA]">Forgot Password?</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View className="w-full flex-1 pt-4 h-1/3 justify-end">
					<Pressable
						onPress={() => navigation.replace("Landing")}
						className="bg-white justify-center items-center p-4 rounded-full"
					>
						<Text className="text-xl font-bold color-[#1C2129]">
							Continue to Sign In
						</Text>
					</Pressable>
				</View>
			</View>
		</ScrollView>
	);
};

export default SignIn;
