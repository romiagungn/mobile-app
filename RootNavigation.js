import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import { View, Text, ActivityIndicator, StatusBar } from "react-native";

import LoginForm from "./src/screens/LoginScreen";
import RegisterForm from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SplashScreen from "./src/screens/SplashScreen";

import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const MyStack = () => {
	console.log("masok sini MyStack");
	return (
		<Stack.Navigator initialRouteName="Splash">
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

const AuthStack = () => {
	console.log("masok sini AuthStack");
	return (
		<Stack.Navigator initialRouteName="Splash">
			<Stack.Screen
				name="Splash"
				component={SplashScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Login"
				component={LoginForm}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Register"
				component={RegisterForm}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export const RootNavigation = () => {
	const [userToken, setUserToken] = useState(null);
	const navigation = useNavigation();

	useEffect(() => {
		const checkToken = async () => {
			const token = await AsyncStorage.getItem("token");
			setUserToken(token);
		};
		checkToken();
	}, []);

	useEffect(() => {
		if (userToken) {
			navigation.navigate("MyStack");
		}
	}, [userToken]);

	return (
		<NavigationContainer>
			{userToken === null ? <AuthStack /> : <MyStack />}
		</NavigationContainer>
	);
};
