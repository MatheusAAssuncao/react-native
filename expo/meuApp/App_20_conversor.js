import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Conversor from './src/conversor'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {

		return (
			<View style={styles.container}>
				<Conversor moedaA="BRL" moedaB="USD"/>
				<Conversor moedaA="BRL" moedaB="EUR"/>
			</View>
		);
	}
}
// horizontal={true} por padrão é false.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? 35 : 0,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default App;
