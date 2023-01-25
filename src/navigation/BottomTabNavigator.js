import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Platform, TouchableOpacity } from "react-native";
import { COLORS, ROUTES } from "../constants";
import { Home, Wallet, Notifications, Settings } from "../screens";
import SettingsNavigator from "./SettingsNavigator";
import CustomTabBarButton from "../components/CustomTabBarButton";
import CustomTabBar from "../components/CustomTabBar";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
	const navigation = useNavigation();

	return (
		<Tab.Navigator
			// tabBar={(props) => <CustomTabBar {...props} />}
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarShowLabel: false,
				tabBarInactiveTintColor: COLORS.dark,
				tabBarStyle: {
					position: "absolute",
					bottom: 25,
					// backgroundColor: "transparent",
					// elevation: 0,
					borderRadius: 20,
					borderTopWidth: 0,
					right: 10,
					left: 10,
					height: 65,
				},
				tabBarActiveTintColor: COLORS.primary,
				tabBarIcon: ({ color, size, focused }) => {
					let iconName;

					if (route.name === ROUTES.HOME_TAB) {
						iconName = focused
							? "ios-home-sharp"
							: "ios-home-outline";
					} else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
						iconName = focused ? "settings" : "settings-outline";
					} else if (route.name === ROUTES.WALLET) {
						iconName = focused ? "wallet" : "wallet-outline";
					} else if (route.name === ROUTES.NOTIFICATIONS) {
						iconName = focused
							? "md-notifications-sharp"
							: "md-notifications-outline";
					}

					return <Ionicons name={iconName} size={22} color={color} />;
				},
			})}
		>
			<Tab.Screen
				name={ROUTES.HOME_TAB}
				component={Home}
				// options={{
				// 	tabBarButton: (props) => (
				// 		<CustomTabBarButton route="home" {...props} />
				// 	),
				// }}
			/>
			<Tab.Screen
				name={ROUTES.WALLET}
				component={Wallet}
				// options={{
				// 	tabBarButton: (props) => <CustomTabBarButton {...props} />,
				// }}
			/>
			<Tab.Screen
				name={ROUTES.NOTIFICATIONS}
				component={Notifications}
				// options={{
				// 	tabBarButton: (props) => <CustomTabBarButton {...props} />,
				// }}
			/>
			<Tab.Screen
				name={ROUTES.SETTINGS_NAVIGATOR}
				component={SettingsNavigator}
				// options={{
				// 	tabBarLabel: "Settings",
				// 	title: "Settings",
				// 	headerShown: true,
				// 	tabBarButton: (props) => (
				// 		<CustomTabBarButton route="settings" {...props} />
				// 	),
				// 	headerRight: () => {
				// 		return (
				// 			<TouchableOpacity
				// 				onPress={() => navigation.openDrawer()}
				// 			>
				// 				<Ionicons
				// 					name={
				// 						Platform.OS === "ios"
				// 							? "ios-menu"
				// 							: "md-menu"
				// 					}
				// 					size={30}
				// 					color={COLORS.dark}
				// 					style={{ marginRight: 10 }}
				// 				/>
				// 			</TouchableOpacity>
				// 		);
				// 	},
				// }}
			/>
		</Tab.Navigator>
	);
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
	tabBarStyle: {
		// position: "absolute",
		// backgroundColor: COLORS.transparent,
		borderTopWidth: 0,
		bottom: 115,
		right: 10,
		// left: 10,
		height: 92,
	},
});
