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
import passwordIcon from "../assets/icons/password.png";
import InputField from "../components/InputField";
import { signIn } from "../API/API";
import { faL } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
	const navigation = useNavigation();
	const [loading, setLoading] = useState(false); // Loading state
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async () => {
		setLoading(true);
		try {
			const res = await signIn({ username, password });
			res && res.status === 200 ? navigation.navigate("EnableLocation") : "";
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}

		// Simulate a network request
		// setTimeout(() => {
		// 	setLoading(false);
		// 	navigation.navigate("EnableLocation");
		// }, 2000); // Replace this with your API call
	};

	return (
		<ScrollView
			style={styles.scrollView}
			contentContainerStyle={styles.scrollViewContent}
		>
			<View style={styles.container}>
				<View style={styles.header}>
					<Pressable onPress={() => navigation.navigate("Home")}>
						<Image style={styles.backButton} source={backIcon} />
					</Pressable>
					<Text style={styles.title}>Sign In</Text>
					<View style={styles.backButton}></View>
				</View>
				<View style={styles.contentContainer}>
					<InputField
						label="Username"
						placeholder="Username"
						icon={userIcon}
						value={username}
						onChangeText={(text) => setUsername(text)}
					/>
					<InputField
						label="Password"
						placeholder="Password"
						icon={passwordIcon}
						secureTextEntry
						value={password}
						onChangeText={(text) => setPassword(text)}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Pressable
						onPress={handleSubmit}
						style={styles.submitButton}
						disabled={loading}
					>
						{loading ? (
							<ActivityIndicator size="small" color="#1C2129" />
						) : (
							<Text style={styles.submitText}>Continue to App</Text>
						)}
					</Pressable>
				</View>
			</View>
		</ScrollView>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: "#1C2129",
		flex: 1,
	},
	scrollViewContent: {
		flexGrow: 1,
		justifyContent: "space-between",
	},
	container: {
		paddingVertical: "15%",
		paddingHorizontal: "5%",
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
	},
	header: {
		width: "100%",
		flexDirection: "row",
		paddingVertical: 16,
		justifyContent: "space-between",
		alignItems: "center",
	},
	backButton: {
		width: 36,
		height: 36,
	},
	title: {
		fontSize: 32,
		color: "white",
		fontWeight: "600",
	},
	contentContainer: {
		width: "100%",
		gap: 12,
		height: "80%",
	},
	inputContainer: {
		marginBottom: 16,
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
		marginBottom: 4,
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
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	icon: {
		height: "100%",
		resizeMode: "contain",
	},
	buttonContainer: {
		width: "100%",
		justifyContent: "flex-end",
		alignItems: "center",
		marginBottom: 16,
	},
	submitButton: {
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		padding: 14,
		borderRadius: 100,
		width: "90%",
	},
	submitText: {
		fontSize: 16,
		fontWeight: "600",
		color: "#1C2129",
	},
});
