import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS, ROUTES } from "../constants";

import { LoginScreen, RegisterScreen, SplashScreen } from "../screens";
import DrawerNavigator from "./DrawerNavigator";

const AuthStack = () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.SPLASH_SCREEN}>
			<Stack.Screen
				name={ROUTES.SPLASH_SCREEN}
				component={SplashScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={ROUTES.LOGIN}
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={ROUTES.REGISTER}
				component={RegisterScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={ROUTES.HOME}
				component={DrawerNavigator}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default AuthStack;
