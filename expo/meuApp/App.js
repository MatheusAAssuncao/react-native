import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";
import Entrar from './src/modal/entrar'

// PRECISA INSTALAR ANTES DE IMPORTAR

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {

		return (
			<View style={styles.container}>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? 35 : 0,
		padding: 10,
		marginTop: 30,
		alignItems: 'center',
		backgroundColor: '#DDD',
		justifyContent: 'center',
	},
});

export default App;
