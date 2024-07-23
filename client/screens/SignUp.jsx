import React, { useState } from "react";
import {
	View,
	Text,
	Image,
	Pressable,
	TextInput,
	StyleSheet,
	ScrollView,
	ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import backIcon from "../assets/icons/arrowleft.png";
import userIcon from "../assets/icons/Vector.png";
import flag from "../assets/icons/flag.png";
import numberIcon from "../assets/icons/tabler_number.png";
import passwordIcon from "../assets/icons/password.png";
import InputField from "../components/InputField";
import { signIn, signUp } from "../API/API";

const SignUp = () => {
	const navigation = useNavigation();
	const [username, setUsername] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [plateNumber, setPlateNumber] = useState("");
	const [createPassword, setCreatePassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false); // Loading state

	const validateUsername = (username) => {
		return !/\s/.test(username);
	};

	const validatePhoneNumber = (phoneNumber) => {
		return /^6\d{8}$/.test(phoneNumber);
	};

	const validatePlateNumber = (plateNumber) => {
		return /^[A-Z]{2}\d{3}[A-Z]{2}$/.test(plateNumber);
	};

	const validatePasswordMatch = (password, confirmPassword) => {
		return password === confirmPassword;
	};

	const handleSubmit = async () => {
		const newErrors = {};

		if (!validateUsername(username)) {
			newErrors.username = "Username should not contain spaces.";
		}

		if (!validatePhoneNumber(phoneNumber)) {
			newErrors.phoneNumber =
				"Phone number should be nine digits starting with 6.";
		}

		if (!validatePlateNumber(plateNumber)) {
			newErrors.plateNumber =
				"Plate number should be 7 characters with two capital letters, three numbers, and two capital letters.";
		}

		if (!validatePasswordMatch(createPassword, confirmPassword)) {
			newErrors.confirmPassword = "Passwords do not match.";
		}

		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			setLoading(true); // Set loading to true when starting submission
			const formData = {
				username,
				firstName,
				lastName,
				phoneNumber,
				plateNumber,
				password: createPassword,
			};
			try {
				const res = await signUp(formData);
				// if (res.status === 200) {
				// 	navigation.navigate("LandingPage");
				// }

				console.log(res.status, "This is the response");

				res && res.status === 201 ? navigation.navigate("SignIn") : "";
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false); // Set loading to false after submission
			}
		}
	};

	const handlePasswordChange = (text) => {
		setCreatePassword(text);
		setErrors((prev) => ({
			...prev,
			confirmPassword:
				text !== confirmPassword ? "Passwords do not match." : null,
		}));
	};

	const handleConfirmPasswordChange = (text) => {
		setConfirmPassword(text);
		setErrors((prev) => ({
			...prev,
			confirmPassword:
				createPassword !== text ? "Passwords do not match." : null,
		}));
	};

	return (
		<>
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
						<InputField
							label="Username"
							placeholder="Username"
							icon={userIcon}
							value={username}
							onChangeText={(text) => {
								setUsername(text);
								setErrors((prev) => ({ ...prev, username: null }));
							}}
							keyboardType="text"
							error={errors.username}
						/>
						<View style={styles.row}>
							<View style={styles.rowItem}>
								<InputField
									label="First Name"
									placeholder="First Name"
									icon={userIcon}
									value={firstName}
									onChangeText={(text) => {
										setFirstName(text);
										setErrors((prev) => ({ ...prev, firstName: null }));
									}}
								/>
							</View>
							<View style={styles.rowItem}>
								<InputField
									label="Last Name"
									placeholder="Last Name"
									icon={userIcon}
									value={lastName}
									onChangeText={(text) => {
										setLastName(text);
										setErrors((prev) => ({ ...prev, lastName: null }));
									}}
									key={1}
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
									placeholder="6xx xxx xxx"
									style={styles.textInput}
									placeholderTextColor="#676666"
									keyboardType="phone-pad"
									value={phoneNumber}
									onChangeText={(text) => {
										setPhoneNumber(text);
										setErrors((prev) => ({ ...prev, phoneNumber: null }));
									}}
								/>
							</View>
							{errors.phoneNumber && (
								<Text style={styles.errorText}>{errors.phoneNumber}</Text>
							)}
						</View>
						<InputField
							label="Plate Number"
							placeholder="Plate Number"
							icon={numberIcon}
							value={plateNumber}
							onChangeText={(text) => {
								setPlateNumber(text);
								setErrors((prev) => ({ ...prev, plateNumber: null }));
							}}
							error={errors.plateNumber}
						/>
						<InputField
							label="Create Password"
							placeholder="Create Password"
							icon={passwordIcon}
							secureTextEntry
							value={createPassword}
							onChangeText={(text) => handlePasswordChange(text)}
						/>
						<InputField
							label="Confirm Password"
							placeholder="Confirm Password"
							icon={passwordIcon}
							secureTextEntry
							value={confirmPassword}
							onChangeText={(text) => handleConfirmPasswordChange(text)}
							error={errors.confirmPassword}
						/>
					</View>
				</View>
			</ScrollView>
			<View style={styles.buttonContainer}>
				<Pressable onPress={handleSubmit} style={styles.submitButton}>
					{loading ? (
						<ActivityIndicator size="small" color="#1C2129" />
					) : (
						<Text style={styles.submitText}>Continue to Sign In</Text>
					)}
				</Pressable>
			</View>
		</>
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
		gap: 18,
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
		position: "absolute",
		bottom: 30,
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
	errorText: {
		color: "red",
		fontSize: 14,
		marginTop: 1,
	},
});
