import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import Slider from "../../components/Slider";

const Wallet = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: COLORS.white,
			}}
		>
			<Slider/>
		</View>
	);
};

export default Wallet;
