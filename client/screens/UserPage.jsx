import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faGift,
	faBell,
	faLanguage,
	faShieldAlt,
	faQuestionCircle,
	faBug,
	faSignOutAlt,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import BottomNav from "../components/BottomNav";
import { useUser } from "../content/UserContext";
import profilePic from "../assets/mh.jpg";

const UserPage = () => {
	const { user } = useUser();
	return (
		<View style={styles.container}>
			<Text style={styles.header}>My Profile</Text>
			<View style={styles.profileSection}>
				<Image source={profilePic} style={styles.profileImage} />
				<View style={styles.profileInfo}>
					<Text style={styles.profileName}>
						{user.first_name} {user.last_name}
					</Text>
					<Text style={styles.profileEmail}>{user.user_name}</Text>
					<Text style={styles.profileNumber}>{user.plate_number}</Text>
				</View>
				<FontAwesomeIcon icon={faChevronRight} size={20} color="#fff" />
			</View>

			<View style={styles.section}>
				<TouchableOpacity style={styles.sectionItem}>
					<FontAwesomeIcon icon={faGift} size={24} color="#80F17E" />
					<Text style={styles.sectionItemText}>Referrals and rewards</Text>
					<FontAwesomeIcon icon={faChevronRight} size={20} color="#fff" />
				</TouchableOpacity>
			</View>

			<Text style={styles.sectionHeader}>Settings and Preferences</Text>
			<View style={styles.section}>
				<TouchableOpacity style={styles.sectionItem}>
					<FontAwesomeIcon icon={faBell} size={24} color="#80F17E" />
					<Text style={styles.sectionItemText}>Notifications</Text>
					<FontAwesomeIcon icon={faChevronRight} size={20} color="#fff" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.sectionItem}>
					<FontAwesomeIcon icon={faLanguage} size={24} color="#80F17E" />
					<Text style={styles.sectionItemText}>Language</Text>
					<FontAwesomeIcon icon={faChevronRight} size={20} color="#fff" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.sectionItem}>
					<FontAwesomeIcon icon={faShieldAlt} size={24} color="#80F17E" />
					<Text style={styles.sectionItemText}>Security</Text>
					<FontAwesomeIcon icon={faChevronRight} size={20} color="#fff" />
				</TouchableOpacity>
			</View>

			<Text style={styles.sectionHeader}>Support</Text>
			<View style={styles.section}>
				<TouchableOpacity style={styles.sectionItem}>
					<FontAwesomeIcon icon={faQuestionCircle} size={24} color="#80F17E" />
					<Text style={styles.sectionItemText}>Help Centre</Text>
					<FontAwesomeIcon icon={faChevronRight} size={20} color="#fff" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.sectionItem}>
					<FontAwesomeIcon icon={faBug} size={24} color="#80F17E" />
					<Text style={styles.sectionItemText}>Report a bug</Text>
					<FontAwesomeIcon icon={faChevronRight} size={20} color="#fff" />
				</TouchableOpacity>
			</View>

			<TouchableOpacity style={styles.logoutButton}>
				<FontAwesomeIcon icon={faSignOutAlt} size={24} color="#FF6347" />
				<Text style={styles.logoutButtonText}>Log out</Text>
			</TouchableOpacity>
			<BottomNav />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1C2129",
		padding: 16,
	},
	header: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#fff",
		textAlign: "center",
		marginTop: 48,
		marginBottom: 12,
	},
	profileSection: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#2C2F36",
		borderRadius: 10,
		padding: 16,
		marginBottom: 20,
	},
	profileImage: {
		width: 60,
		height: 60,
		borderRadius: 100,
		objectFit: "cover",
	},
	profileInfo: {
		marginLeft: 16,
		flex: 1,
		justifyContent: "center",
	},
	profileName: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#fff",
	},
	profileEmail: {
		fontSize: 14,
		color: "#aaa",
	},
	profileNumber: {
		fontSize: 12,
		color: "#aaa",
	},
	sectionHeader: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#fff",
		marginVertical: 10,
	},
	section: {
		backgroundColor: "#2C2F36",
		borderRadius: 10,
		marginBottom: 20,
	},
	sectionItem: {
		flexDirection: "row",
		alignItems: "center",
		padding: 16,
		borderBottomColor: "#333",
		// borderBottomWidth: 1,
	},
	sectionItemText: {
		flex: 1,
		fontSize: 16,
		color: "#fff",
		marginLeft: 16,
	},
	logoutButton: {
		flexDirection: "row",
		alignItems: "center",
		// justifyContent: "center",
		padding: 16,
		borderTopColor: "#333",
		borderTopWidth: 1,
	},
	logoutButtonText: {
		fontSize: 16,
		color: "#FF6347",
		marginLeft: 8,
	},
});

export default UserPage;
