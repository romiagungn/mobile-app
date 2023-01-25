import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import { View, Text } from "react-native-animatable";

const Drawer = createDrawerNavigator();

const AuthStack = () => {
	const [fontsLoaded] = useFonts({
		"Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}
	return (
		<View>
			<Text>TEST</Text>
		</View>
	);
};

export default AuthStack;
