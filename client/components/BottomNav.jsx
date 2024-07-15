import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faTrafficLight,
	faLocationDot,
	faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

const BottomNav = () => {
	const navigation = useNavigation();
	const [activeItem, setActiveItem] = useState("trafficLight");

	const items = [
		{ id: "trafficLight", icon: faTrafficLight, route: "LandingPage" },
		{ id: "locationDot", icon: faLocationDot, route: "LocationPage" },
		{ id: "user", icon: faUserCircle, route: "UserPage" },
	];

	const handlePress = (item) => {
		setActiveItem(item.id);
		navigation.replace(item.route);
	};

	return (
		<View style={styles.container}>
			{items.map((item) => (
				<TouchableOpacity
					key={item.id}
					onPress={() => handlePress(item)}
					style={styles.item}
				>
					<FontAwesomeIcon
						size={28}
						color={activeItem === item.id ? "#80F17E" : "#ffffff"}
						icon={item.icon}
					/>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "#1C2129",
		height: 70,
		width: "100%",
		position: "absolute",
		bottom: 0,
		justifyContent: "space-evenly",
		alignItems: "center",
		paddingVertical: 10,
		borderTopWidth: 1,
		borderTopColor: "#222333444",
	},
	item: {
		width: 60,
		height: "100%",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default BottomNav;
