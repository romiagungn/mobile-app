import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import loginSlice from "./slice/loginSlice";
import registerSlice from "./slice/registerSlice";
import authSlice from './slice/authSlice'

const middleware = [...getDefaultMiddleware(), thunk];

const store = configureStore({
	reducer: {
		login: loginSlice,
		register: registerSlice,
		auth: authSlice
	},
	middleware,
	devTools: true,
});

export default store;
