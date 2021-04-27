import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from './src/navigator/pages-tabs/home';
import Sobre from './src/navigator/pages-tabs/sobre';
import Contato from './src/navigator/pages-tabs/contato';
import CustomDrawer from './src/navigator/pages-tabs/components/custom-drawer';

const Drawer = createDrawerNavigator();

export default function App() {
	return(
		<NavigationContainer>
			<Drawer.Navigator drawerContent={CustomDrawer}>
				<Drawer.Screen name="Home" component={Home}/>
				<Drawer.Screen name="Sobre" component={Sobre}/>
				<Drawer.Screen name="Contato" component={Contato}/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}