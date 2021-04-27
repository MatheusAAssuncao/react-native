import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/navigator/pages-tabs/home';
import Sobre from './src/navigator/pages-tabs/sobre';
import Contato from './src/navigator/pages-tabs/contato';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const icons = {
	Home: {
		name: 'home',
	},
	Sobre: {
		name: 'info-circle',
	},
	Contato: {
		name: 'address-book',
	}
};

function Tabs() {

	return (
		<Tab.Navigator 
			screenOptions={ ({route}) => ({
				tabBarIcon: ({color, size}) => {
					const {name} = icons[route.name];
					return <FontAwesome name={name} color={color} size={size}/>
				}
			})}
			tabBarOptions={{ 
				style: {
					backgroundColor: '#121212',
				},
				activeTintColor: '#FFF',
			}}
			>
			<Tab.Screen name="Home" component={Home}/>
			<Tab.Screen name="Sobre" component={Sobre}/>
		</Tab.Navigator>
	);
}

export default function App() {
	return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }}/>
				<Stack.Screen name="Contato" component={Contato}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}