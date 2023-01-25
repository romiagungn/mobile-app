import React, { useEffect, useState } from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { View, Text, AsyncStorage, ActivityIndicator } from "react-native";
import { Init } from "./src/features/actions";
import LottieView from "lottie-react-native";

import store from "./src/features/store";
import AuthStack from "./src/navigation/AuthStack";
import AppStack from "./src/navigation/AppStack";

const NavigationStack = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.login);

	const { isLoggedIn } = useSelector((state) => state.auth);
	const [loading, setLoading] = useState(true);

	const init = async () => {
		setLoading(true);
		setTimeout(() => {
			dispatch(Init());
			setLoading(false);
		},3000);
	};

	useEffect(() => {
		init();
	}, []);

	if (loading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "rgb(2,0,36)"
				}}
			>
				<LottieView
					source={require("./assets/animationTralvel.json")}
					loop
					autoPlay
				/>
			</View>
		);
	}

	console.log(isLoggedIn, "isLoggedIn");

	// return isLoggedIn ? <AuthStack /> : <AppStack />;

	return <AuthStack />;
};

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<NavigationStack />
			</NavigationContainer>
		</Provider>
	);
};

export default App;
