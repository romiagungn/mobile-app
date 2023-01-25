import { Api } from "./services";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Init = () => {
	return async (dispatch) => {
		let token = await AsyncStorage.getItem("token");
		if (token !== null) {
			console.log("token fetched");
			dispatch({
				type: "LOGIN",
				payload: token,
			});
		}
	};
};

export const login = (payload) => async (dispatch) => {
	const { email, password } = payload;
	try {
		let token = null;
		// const res = await Api.loginApi(email, password);
		if (email !== "" && password !== "") {
			token = email + password;
			await AsyncStorage.setItem("token", token);
			console.log(token, "token action stored");
		}
		dispatch({ type: "LOGIN_SUCCESS", payload: token });
	} catch (error) {
		dispatch({ type: "LOGIN_ERROR", payload: error });
	}
};

export const logout = () => {
	return async (dispatch) => {
		await AsyncStorage.clear();
		dispatch({
			type: "LOGOUT",
		});
	};
};

// export const register = (name, email, password) => async (dispatch) => {
// 	try {
// 		const res = await Api.registerApi(name, email, password);
// 		dispatch({ type: "REGGISTER_SUCCESS", payload: res });
// 	} catch (error) {
// 		dispatch({ type: "REGGISTER_ERROR", payload: error });
// 	}
// };
