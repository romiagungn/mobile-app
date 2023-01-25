import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import Slider from '../../components/Slider'

const Home = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: COLORS.white,
			}}
		>
			<Text>Home!</Text>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
