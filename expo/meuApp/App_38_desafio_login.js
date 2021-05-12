import React from "react";
import { LogBox } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/desafio-login/home/';
import Login from './src/desafio-login/login/';

// remove alerta de consulta no banco
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export default function App() {

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={Login} 
					options={{ title: 'Login', headerStyle: { backgroundColor: '#121212'}, headerTintColor: '#FFF', headerShown: false}}/>
				<Stack.Screen name="Home" component={Home}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}