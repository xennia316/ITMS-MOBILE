import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import BottomNav from "../components/BottomNav";
import LocationData from "../car_analysis_results.json";
import { LocationContext } from "../context/LocationContext";

const LandingPage = () => {
	const { location } = useContext(LocationContext);
	const [trafficLightStatus, setTrafficLightStatus] = useState("red");
	const [countdown, setCountdown] = useState(10);
	const [road, setRoad] = useState("Unknown Road");
	const [roadData, setRoadData] = useState(null);

	const determineRoad = (latitude, longitude) => {
		const northRoad = {
			latMin: 0.0,
			latMax: 90.0,
			lonMin: -180.0,
			lonMax: 180.0,
		};
		const eastRoad = {
			latMin: -90.0,
			latMax: 90.0,
			lonMin: 0.0,
			lonMax: 180.0,
		};
		const westRoad = {
			latMin: -90.0,
			latMax: 90.0,
			lonMin: -180.0,
			lonMax: 0.0,
		};
		const southRoad = {
			latMin: -90.0,
			latMax: 0.0,
			lonMin: -180.0,
			lonMax: 180.0,
		};

		if (
			latitude >= northRoad.latMin &&
			latitude <= northRoad.latMax &&
			longitude >= northRoad.lonMin &&
			longitude <= northRoad.lonMax
		) {
			return "North Road";
		} else if (
			latitude >= eastRoad.latMin &&
			latitude <= eastRoad.latMax &&
			longitude >= eastRoad.lonMin &&
			longitude <= eastRoad.lonMax
		) {
			return "East Road";
		} else if (
			latitude >= westRoad.latMin &&
			latitude <= westRoad.latMax &&
			longitude >= westRoad.lonMin &&
			longitude <= westRoad.lonMax
		) {
			return "West Road";
		} else if (
			latitude >= southRoad.latMin &&
			latitude <= southRoad.latMax &&
			longitude >= southRoad.lonMin &&
			longitude <= southRoad.lonMax
		) {
			return "South Road";
		} else {
			return "Unknown Road";
		}
	};

	useEffect(() => {
		const { latitude, longitude } = location.coords;
		const determinedRoad = determineRoad(latitude, longitude);
		setRoad(determinedRoad);
		const data = LocationData.find((item) => item.location === determinedRoad);
		setRoadData(data);
		setTrafficLightStatus(
			data ? data.traffic_light_state.toLowerCase() : "red"
		);
		setCountdown(10);
	}, [location]);

	useEffect(() => {
		if (roadData) {
			const interval = setInterval(() => {
				if (countdown <= 2) {
					setTrafficLightStatus("yellow");
				}
				setCountdown((prev) => prev - 1);
				if (countdown <= 0) {
					setTrafficLightStatus(roadData.traffic_light_state.toLowerCase());
					setCountdown(10);
				}
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [countdown, roadData]);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.topText}>
					Location: <Text style={styles.location}>{road}</Text>
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
			{roadData && (
				<View style={styles.statistics}>
					<View style={styles.column}>
						<Text style={[styles.cell, styles.title]}>Parameter</Text>
						<Text style={styles.cell}>Number of cars</Text>
						<Text style={styles.cell}>Speed of cars (kmph)</Text>
						<Text style={styles.cell}>Distance between cars (km)</Text>
					</View>
					<View style={styles.column}>
						<Text style={[styles.cell, styles.title]}>Value</Text>
						<Text style={styles.cell}>{roadData.total_cars}</Text>
						<Text style={styles.cell}>
							{roadData.average_speed_kmph.toFixed(2)}
						</Text>
						<Text style={styles.cell}>
							{roadData.average_distance_between_cars_km.toFixed(2)}
						</Text>
					</View>
				</View>
			)}
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
