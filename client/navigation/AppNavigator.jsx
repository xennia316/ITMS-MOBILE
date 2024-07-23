import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import Onboarding from "../screens/Onboarding";
import Home from "../screens/Home";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import LandingPage from "../screens/LandingPage";
import UserPage from "../screens/UserPage";
import EnableLocation from "../screens/EnableLocation";
import { LocationProvider } from "../context/LocationContext.js";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
	return (
		<LocationProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Splash"
						component={SplashScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Onboarding"
						component={Onboarding}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="SignUp"
						component={SignUp}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="SignIn"
						component={SignIn}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="LandingPage"
						component={LandingPage}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="UserPage"
						component={UserPage}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="EnableLocation"
						component={EnableLocation}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</LocationProvider>
	);
};

export default AppNavigator;
