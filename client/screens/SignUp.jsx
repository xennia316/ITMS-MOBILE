import React from "react";
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

	const InputField = ({
		label,
		placeholder,
		icon,
		keyboardType = "default",
		secureTextEntry = false,
	}) => (
		<View style={styles.inputContainer}>
			<Text style={styles.inputFieldText}>{label}</Text>
			<View style={styles.inputField}>
				<View style={styles.iconContainer}>
					<Image style={styles.icon} source={icon} />
				</View>
				<TextInput
					placeholder={placeholder}
					style={styles.textInput}
					placeholderTextColor="#676666"
					keyboardType={keyboardType}
					secureTextEntry={secureTextEntry}
				/>
			</View>
		</View>
	);

	return (
		<ScrollView style={styles.scrollView}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Pressable onPress={() => navigation.navigate("Home")}>
						<Image style={styles.backButton} source={backIcon} />
					</Pressable>
					<Text style={styles.title}>Sign Up</Text>
					<View style={styles.backButton}></View>
				</View>
				<View style={styles.contentContainer}>
					<InputField label="Username" placeholder="Username" icon={userIcon} />
					<View style={styles.row}>
						<View style={styles.rowItem}>
							<InputField
								label="First Name"
								placeholder="First Name"
								icon={userIcon}
							/>
						</View>
						<View style={styles.rowItem}>
							<InputField
								label="Last Name"
								placeholder="Last Name"
								icon={userIcon}
							/>
						</View>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputFieldText}>Phone Number</Text>
						<View style={styles.inputField}>
							<View style={styles.iconContainer}>
								<Image style={styles.icon} source={flag} />
							</View>
							<Text style={styles.countryCode}>+237</Text>
							<TextInput
								placeholder="600 000 000"
								style={styles.textInput}
								placeholderTextColor="#676666"
								keyboardType="phone-pad"
							/>
						</View>
					</View>
					<InputField
						label="Plate Number"
						placeholder="Plate Number"
						icon={numberIcon}
					/>
					<InputField
						label="Create Password"
						placeholder="Create Password"
						icon={passwordIcon}
						secureTextEntry
					/>
					<InputField
						label="Confirm Password"
						placeholder="Confirm Password"
						icon={passwordIcon}
						secureTextEntry
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Pressable
						onPress={() => navigation.replace("SignIn")}
						style={styles.submitButton}
					>
						<Text style={styles.submitText}>Continue to Sign In</Text>
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
		gap: 24,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
	},
	rowItem: {
		width: "48%",
	},
	inputContainer: {
		marginBottom: 8,
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
		paddingLeft: 18,
		flex: 1,
	},
	iconContainer: {
		width: 20,
		height: 20,
		// marginRight: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	icon: {
		height: "100%",
		resizeMode: "contain",
		alignSelf: "flex-start",
	},
	countryCode: {
		fontSize: 18,
		color: "white",
		marginLeft: 8,
	},
	buttonContainer: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 16,
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
