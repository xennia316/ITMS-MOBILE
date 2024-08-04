import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import image from "../assets/home.png";
import { StyleSheet } from "react-native";

const Home = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={image} style={styles.image} />
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.text}>Get Started!</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<Pressable
					onPress={() => navigation.replace("SignUp")}
					style={[styles.button, styles.buttonWhite]}
				>
					<Text style={[styles.buttonText, styles.buttonPrimaryText]}>
						Create Account
					</Text>
				</Pressable>
				<Pressable
					onPress={() => navigation.replace("SignIn")}
					style={[styles.button, styles.buttonPrimary]}
				>
					<Text style={[styles.buttonText, styles.buttonSignInText]}>
						Sign In
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default Home;

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
	imageContainer: {
		flexDirection: "column",
		width: "100%",
		height: "40%", // Assuming height is 3/5 of the screen height
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
		fontSize: 38,
		fontWeight: "bold",
	},
	buttonsContainer: {
		width: "100%",
		flexDirection: "column",
		justifyContent: "flex-end",
		gap: 4,
	},
	button: {
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		padding: 14,
		borderRadius: 100,
		marginVertical: 8, // Adjust spacing if needed
	},
	buttonWhite: {
		borderColor: "white",
		borderWidth: 2,
	},
	buttonText: {
		fontSize: 18,
		fontWeight: "bold",
	},
	buttonPrimary: {
		backgroundColor: "#1C2129",
		borderWidth: 2,
		borderRadius: 100,
		borderColor: "white",
	},
	buttonPrimaryText: {
		color: "#1C2129",
	},
	buttonSignInText: {
		color: "#80F17E",
	},
});
