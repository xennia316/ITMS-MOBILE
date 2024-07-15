import React, { useState } from "react";
import {
	View,
	Text,
	Image,
	Pressable,
	TextInput,
	StyleSheet,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import backIcon from "../assets/icons/arrowleft.png";
import userIcon from "../assets/icons/Vector.png";
import flag from "../assets/icons/flag.png";
import numberIcon from "../assets/icons/tabler_number.png";
import passwordIcon from "../assets/icons/password.png";

const SignUp = () => {
	const navigation = useNavigation();
	return (
		<ScrollView style={styles.scrollView}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Pressable onPress={() => navigation.navigate("Home")}>
						<View style={styles.backButton}>
							<Image style={styles.backButton} source={backIcon} />
						</View>
					</Pressable>
					<Text style={styles.title}>Sign Up</Text>
					<View style={styles.backButton}></View>
				</View>
				<View style={styles.contentContainer}>
					<View style={styles.inputContainer}>
						<Text style={styles.inputFieldText}>Username</Text>
						<View style={styles.inputField}>
							<View style={styles.iconContainer}>
								<Image style={styles.icon} source={userIcon} />
							</View>
							<TextInput
								placeholder="Username"
								style={styles.textInput}
								placeholderTextColor="#676666"
							/>
						</View>
					</View>
					<View className="flex-row w-full justify-between">
						<View className="flex-col w-12/25 gap-y-2">
							<Text style={styles.inputFieldText}>First Name</Text>
							<View style={styles.inputField}>
								<View style={styles.iconContainer}>
									<Image style={styles.icon} source={userIcon} />
								</View>
								<TextInput
									placeholder="First Name"
									style={styles.textInput}
									placeholderTextColor="#676666"
								/>
							</View>
						</View>
						<View className="flex-col w-12/25 gap-y-2">
							<Text style={styles.inputFieldText}>Last Name</Text>
							<View style={styles.inputField}>
								<View style={styles.iconContainer}>
									<Image style={styles.icon} source={userIcon} />
								</View>
								<TextInput
									placeholder="Last Name"
									style={styles.textInput}
									placeholderTextColor="#676666"
								/>
							</View>
						</View>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputFieldText}>Phone Number</Text>
						<View style={styles.inputField}>
							<View style={styles.iconContainer}>
								<Image style={styles.icon} source={flag} />
							</View>
							<Text className="text-lg color-white pl-2">+237</Text>
							<TextInput
								placeholder="600 000 000"
								style={styles.textInput}
								placeholderTextColor="#676666"
								keyboardType="phone-pad"
							/>
						</View>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputFieldText}>Plate Number</Text>
						<View style={styles.inputField}>
							<View style={styles.iconContainer}>
								<Image style={styles.icon} source={numberIcon} />
							</View>
							<TextInput
								placeholder="Plate Number"
								style={styles.textInput}
								placeholderTextColor="#676666"
							/>
						</View>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputFieldText}>Create Password</Text>
						<View style={styles.inputField}>
							<View style={styles.iconContainer}>
								<Image style={styles.icon} source={passwordIcon} />
							</View>
							<TextInput
								placeholder="Create Password"
								style={styles.textInput}
								placeholderTextColor="#676666"
								type="password"
							/>
						</View>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputFieldText}>Confirm Password</Text>
						<View style={styles.inputField}>
							<View style={styles.iconContainer}>
								<Image style={styles.icon} source={passwordIcon} />
							</View>
							<TextInput
								placeholder="Confirm Password"
								style={styles.textInput}
								placeholderTextColor="#676666"
								type="password"
							/>
						</View>
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<Pressable
						onPress={() => navigation.replace("SignIn")}
						style={styles.submitButton}
					>
						<Text className="text-xl font-semibold color-[#1C2129]">
							Continue to Sign In
						</Text>
					</Pressable>
				</View>
			</View>
		</ScrollView>
	);
};

export default SignUp;

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: "#1C2129",
		flex: 1,
		position: "relative",
		height: "100vh",
	},
	container: {
		paddingVertical: "15%",
		paddingHorizontal: "5%", // Adjust horizontal padding if needed
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		height: "100%",
	},
	header: {
		width: "100%",
		flexDirection: "row",
		paddingTop: 16,
		paddingBottom: 16,
		justifyContent: "space-between",
	},
	backButton: {
		width: 36,
		height: 36,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 32,
		color: "white",
		fontWeight: "semibold",
	},
	contentContainer: {
		flexDirection: "column",
		// justifyContent: "",
		gap: 24,
	},
	inputContainer: {
		gap: 4,
	},
	inputField: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "#374151",
		borderRadius: 10,
		padding: 8,
	},
	inputFieldText: {
		color: "white",
		fontSize: 18,
	},
	textInput: {
		fontSize: 18,
		color: "white",
		paddingLeft: 4,
		flex: 1,
	},
	iconContainer: {
		width: 20,
		height: 20,
		marginRight: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		height: "100%",
		objectFit: "contain",
	},
	phoneNumberContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	countryCode: {
		marginRight: 8,
		fontSize: 18,
		color: "white",
	},
	buttonContainer: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		height: "20%",
		position: "absolute",
		bottom: -120,
	},
	submitButton: {
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		padding: 14,
		borderRadius: 100,
		marginVertical: 4,
		width: "90%",
	},
	submitText: {
		fontSize: 16,
		fontWeight: "semibold",
		color: "#1C2129",
	},
});
