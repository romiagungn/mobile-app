import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://localhost:3000/";

const register = (username, email, password) => {
	return axios.post(API_URL + "register", {
		username,
		email,
		password,
	});
};

const login = async (username, password) => {
	try {
		// const response = await axios.post(API_URL + "login", {
		// 	username,
		// 	password,
		// });

		const response = { data: "asdasdsad" };
		if (response) {
			await AsyncStorage.setItem(
				"dataUser",
				JSON.stringify(response)
			);
		}
		return response;
	} catch (error) {
		console.log(error, "erri abjeng");
		throw error;
	}
};

const logout = async () => {
	console.log('logout');
	await AsyncStorage.removeItem("dataUser");
};

const authService = {
	register,
	login,
	logout,
};

export default authService;
