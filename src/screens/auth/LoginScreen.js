import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/slice/authSlice";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";
import InputField from "../../components/InputField";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import LoginSVG from "../../assets/images/misc/login.svg";
import GoogleSVG from "../../assets/images/misc/google.svg";
import FacebookSVG from "../../assets/images/misc/facebook.svg";
import TwitterSVG from "../../assets/images/misc/twitter.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {COLORS, ROUTES} from '../../constants';

function LoginForm() {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	// const { message } = useSelector((state) => state.message);

	const handleLogin = async () => {
		setIsLoading(true);
		navigation.navigate(ROUTES.HOME)
		// try {
		// 	const credentials = { username, password };
		// 	dispatch(login({ username, password }));
		// 	const timer = setTimeout(() => {
		// 		// navigation.navigate("Home");
		// 		setIsLoading(false);
		// 	}, 1000);
		// 	return () => {
		// 		clearTimeout(timer);
		// 	};
		// } catch (error) {
		// 	alert(error.message);
		// }
	};

	const handleLogout = async () => {
		console.log("submit");
		const token = await AsyncStorage.getItem("token");
		console.log(token, "token loggout");
		if (token) {
			dispatch(logout());
		}
	};

	const handleNavigateToRegister = () => {
		navigation.navigate("Register");
	};

	return (
		<SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
			<View style={{ paddingHorizontal: 25 }}>
				{/* <Text>asdasd</Text> */}
				<View style={{ alignItems: "center" }}>
					<LoginSVG
						height={300}
						width={300}
						style={{ transform: [{ rotate: "-5deg" }] }}
					/>
				</View>
				<Text
					style={{
						fontSize: 28,
						fontWeight: "500",
						color: "#333",
						marginBottom: 30,
					}}
				>
					Login
				</Text>

				<InputField
					value={username}
					onChangeText={setUsername}
					label={"Email ID"}
					icon={
						<MaterialIcons
							name="alternate-email"
							size={20}
							color="#666"
							style={{ marginRight: 5 }}
						/>
					}
					keyboardType="email-address"
				/>

				<InputField
					value={password}
					onChangeText={setPassword}
					label={"Password"}
					icon={
						<Ionicons
							name="ios-lock-closed-outline"
							size={20}
							color="#666"
							style={{ marginRight: 5 }}
						/>
					}
					inputType="password"
					fieldButtonLabel={"Forgot?"}
					fieldButtonFunction={() => {}}
				/>
				<CustomButton
					label={"Login"}
					isLoading={isLoading}
					onPress={handleLogin}
				/>
				<Text className="text-center mb-7 text-black">
					Or, login with ...
				</Text>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginBottom: 30,
					}}
				>
					<TouchableOpacity
						onPress={() => {}}
						style={{
							borderColor: "#ddd",
							borderWidth: 2,
							borderRadius: 10,
							paddingHorizontal: 30,
							paddingVertical: 10,
						}}
					>
						<GoogleSVG height={24} width={24} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {}}
						style={{
							borderColor: "#ddd",
							borderWidth: 2,
							borderRadius: 10,
							paddingHorizontal: 30,
							paddingVertical: 10,
						}}
					>
						<FacebookSVG height={24} width={24} />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {}}
						style={{
							borderColor: "#ddd",
							borderWidth: 2,
							borderRadius: 10,
							paddingHorizontal: 30,
							paddingVertical: 10,
						}}
					>
						<TwitterSVG height={24} width={24} />
					</TouchableOpacity>
				</View>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						marginBottom: 30,
					}}
				>
					<Text>New to the app?</Text>
					<TouchableOpacity
						onPress={() => navigation.navigate("Register")}
					>
						<Text
							style={{
								color: "rgb(13,0,230)",
								fontWeight: "700",
							}}
						>
							{" "}
							Register
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default LoginForm;
