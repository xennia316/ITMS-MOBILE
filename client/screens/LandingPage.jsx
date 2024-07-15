import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import BottomNav from "../components/BottomNav";

const LandingPage = () => {
	const [trafficLightStatus, setTrafficLightStatus] = useState("red"); // Initialize with "red" or any default status
	const [countdown, setCountdown] = useState(10); // Initialize countdown with 10 seconds

	// Simulate traffic light status change
	useEffect(() => {
		const statuses = ["red", "yellow", "green"];
		let currentIndex = 0;

		const interval = setInterval(() => {
			setTrafficLightStatus(statuses[currentIndex]);
			setCountdown(10); // Reset countdown when status changes
			currentIndex = (currentIndex + 1) % statuses.length;
		}, 10000); // Change status every 10 seconds

		return () => clearInterval(interval);
	}, []);

	// Countdown logic
	useEffect(() => {
		if (countdown > 0) {
			const timer = setInterval(() => {
				setCountdown((prev) => prev - 1);
			}, 1000); // Update countdown every 1 second

			return () => clearInterval(timer);
		}
	}, [countdown]);

	const entries = [
		{ title: "Title 1", content: ["Entry 1.1", "Entry 1.2", "Entry 1.3"] },
		{ title: "Title 2", content: ["Entry 2.1", "Entry 2.2", "Entry 2.3"] },
	];

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.topText}>
					Location: <Text style={styles.location}>Sandpit</Text>
				</Text>
				<View style={styles.trafficLight}>
					<View
						style={[
							styles.allLights,
							trafficLightStatus === "green" ? styles.green : styles.dull,
						]}
					/>
					<View
						style={[
							styles.allLights,
							trafficLightStatus === "yellow" ? styles.yellow : styles.dull,
						]}
					/>
					<View
						style={[
							styles.allLights,
							trafficLightStatus === "red" ? styles.red : styles.dull,
						]}
					/>
				</View>
			</View>
			<Text style={styles.countdown}>{countdown}s</Text>
			<View style={styles.statistics}>
				{entries.map((column, index) => (
					<View key={index} style={styles.column}>
						<Text style={[styles.cell, styles.title]}>{column.title}</Text>
						{column.content.map((entry, idx) => (
							<Text key={idx} style={styles.cell}>
								{entry}
							</Text>
						))}
					</View>
				))}
			</View>
			<BottomNav />
		</View>
	);
};

export default LandingPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#1C2129",
		paddingHorizontal: "5%",
		paddingTop: "15%",
		paddingBottom: "20%",
		justifyContent: "space-around",
		width: "100%",
	},
	header: {
		alignItems: "center",
		marginBottom: 30,
	},
	topText: {
		color: "white",
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 20,
	},
	location: {
		fontSize: 32,
		color: "#80F17E",
	},
	trafficLight: {
		width: 70,
		height: 200,
		borderColor: "white",
		borderWidth: 2,
		borderRadius: 40,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#2C2F36",
		padding: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 5,
	},
	allLights: {
		height: 50,
		width: 50,
		borderRadius: 25,
	},
	green: {
		backgroundColor: "green",
	},
	yellow: {
		backgroundColor: "yellow",
	},
	red: {
		backgroundColor: "red",
	},
	dull: {
		backgroundColor: "#374151",
	},
	countdown: {
		fontSize: 24,
		color: "#fff",
		fontWeight: "bold",
		marginTop: 10,
		backgroundColor: "#2C2F36",
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderRadius: 10,
	},
	statistics: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
	},
	column: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		marginHorizontal: 10,
		backgroundColor: "#2C2F36",
		borderRadius: 10,
		padding: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 5,
	},
	cell: {
		height: 40,
		width: "100%",
		textAlign: "center",
		textAlignVertical: "center",
		color: "#fff",
		marginVertical: 5,
	},
	title: {
		fontWeight: "bold",
		color: "#80F17E",
		fontSize: 18,
		marginBottom: 10,
	},
});
