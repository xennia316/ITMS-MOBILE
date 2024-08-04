import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { LocationContext } from "../context/LocationContext";

const EnableLocation = () => {
	const { setLocation } = useContext(LocationContext);
	const [errorMsg, setErrorMsg] = useState(null);
	const navigation = useNavigation();

	const getLocation = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== "granted") {
			setErrorMsg("Permission to access location was denied");
			return;
		}

		let location = await Location.getCurrentPositionAsync({});
		setLocation(location);
		navigation.navigate("LandingPage");
	};

	let locationText = "Waiting..";
	if (errorMsg) {
		locationText = errorMsg;
	}

	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<View style={styles.icon}>
					<FontAwesomeIcon size={44} icon={faLocationDot} />
				</View>
			</View>
			<Text style={styles.title}>Enable precise location</Text>
			<Text style={styles.subtitle}>
				You'll need to enable your location in order to use this app.
			</Text>
			<TouchableOpacity style={styles.button} onPress={getLocation}>
				<Text style={styles.buttonText}>Enable</Text>
			</TouchableOpacity>
			<Text style={styles.locationText}>{locationText}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1C2129",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 20,
		padding: "5%",
	},
	iconContainer: {
		marginBottom: 40,
	},
	icon: {
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: "#4CAF50",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 24,
		color: "#FFFFFF",
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 16,
		color: "#B0B0B0",
		textAlign: "center",
		marginBottom: 40,
	},
	button: {
		backgroundColor: "#FFFFFF",
		borderRadius: 30,
		paddingVertical: 15,
		paddingHorizontal: 40,
		width: "90%",
		position: "absolute",
		bottom: 50,
	},
	buttonText: {
		fontSize: 20,
		color: "#1C2129",
		textAlign: "center",
		fontWeight: "semibold",
	},
	locationText: {
		fontSize: 16,
		color: "#FFFFFF",
		marginTop: 20,
	},
});

export default EnableLocation;
