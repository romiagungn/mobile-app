import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	showMessage: false,
	alertMessage: null,
	error: null,
};

const registerSlice = createSlice({
	name: "register",
	initialState,
	reducers: {
		registerStart: (state) => {
			state.isLoading = true;
		},
		registerSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.error = null;
			state.showMessage = false;
			state.alertMessage = null;
		},
		registerError: (state, { payload }) => {
			state.isLoading = false;
			state.showMessage = true;
			state.alertMessage = payload;
			state.error = payload;
		},
	},
});

export const { registerStart, registerSuccess, registerError } =
	registerSlice.actions;

export default registerSlice.reducer;
