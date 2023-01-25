import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from ".//messageSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Api from "../services";

const dataUser = AsyncStorage.getItem("dataUser");

export const register = createAsyncThunk(
	"auth/register",
	async ({ username, email, password }, thunkAPI) => {
		try {
			const response = await Api.register(username, email, password);
			thunkAPI.dispatch(setMessage(response.data.message));
			return response.data;
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			thunkAPI.dispatch(setMessage(message));
			return thunkAPI.rejectWithValue();
		}
	}
);

export const login = createAsyncThunk(
	"auth/login",
	async ({ username, password }, thunkAPI) => {
		console.log(username, password,'username, password');
		try {
			const data = await Api.login(username, password);
			console.log(data,'data login');
			return { dataUser: data };
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			thunkAPI.dispatch(setMessage(message));
			return thunkAPI.rejectWithValue();
		}
	}
);

export const logout = createAsyncThunk("auth/logout", async () => {
	console.log('slice logout');
	await Api.logout();
});

const initialState = {
	isLoggedIn: true,
	status: "idle",
	error: null,
	dataUser: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.isLoggedIn = true;
				state.status = "loading";
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoggedIn = false;
				state.status = "succeeded";
				state.dataUser = action.payload.data;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoggedIn = true;
				state.status = "failed";
				state.error = action.error.message;
				state.dataUser = null;
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.isLoggedIn = true;
				state.status = "failed";
				state.error = action.error;
				state.dataUser = null;
			})
			.addCase(register.pending, (state) => {
				state.status = "loading";
			})
			.addCase(register.fulfilled, (state, action) => {
				state.status = "succeeded";
			})
			.addCase(register.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

const { reducer } = authSlice;
export default reducer;
