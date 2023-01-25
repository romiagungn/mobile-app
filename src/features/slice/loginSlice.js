import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
	token: null,
	error: null,
	isLoading: false,
	alertMessage: null,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginStart: (state) => {
			state.isLoading = true;
		},
		loginSuccess: (state, { payload }) => {
			state.token = payload;
			state.token = payload
			state.isLoading = false;
			state.error = null;
			state.showMessage = false;
			state.alertMessage = null;
			AsyncStorage.setItem("token", payload);
		},
		loginError: (state, { payload }) => {
			state.isLoading = false;
			state.showMessage = true;
			state.alertMessage = payload;
			state.error = payload;
		},
		logout: (state) => {
			console.log(state,'state')
			state.token = null;
		},
	},
});

export const { loginStart, loginSuccess, loginError, logout } =
	authSlice.actions;

export default authSlice.reducer;
