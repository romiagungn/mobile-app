import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

export default function CustomButton({ label, onPress, isLoading }) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				backgroundColor: "rgb(2,0,36)",
				padding: 12,
				borderRadius: 10,
				marginBottom: 30,
			}}
		>
			{isLoading === false ? (
				<Text
					style={{
						textAlign: "center",
						fontWeight: "700",
						fontSize: 16,
						color: "#fff",
					}}
				>
					{label}
				</Text>
			) : (
				<ActivityIndicator size="small" color="#ffffff" />
			)}
		</TouchableOpacity>
	);
}
