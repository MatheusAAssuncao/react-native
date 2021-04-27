import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/navigator/pages-stack/home';
import Sobre from './src/navigator/pages-stack/sobre';
import Contato from './src/navigator/pages-stack/contato';

const Stack = createStackNavigator();

export default function App() {

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} 
					options={{ title: 'Inicio', headerStyle: { backgroundColor: '#121212'}, headerTintColor: '#FFF', headerShown: false}}/>
				<Stack.Screen name="Sobre" component={Sobre}/>
				<Stack.Screen name="Contato" component={Contato}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}