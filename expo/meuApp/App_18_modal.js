import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";
import Entrar from './src/modal/entrar'

// PRECISA INSTALAR ANTES DE IMPORTAR

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
		};

		this.btnAction = this.btnAction.bind(this);
	}

	btnAction() {
		this.setState({
			modalVisible: !this.state.modalVisible,
		});
	}

	render() {

		return (
			<View style={styles.container}>

				<Button title="Entrar" onPress={this.btnAction}/>

				<Modal transparent={true} animationType='slide' visible={this.state.modalVisible}>
					<View style={{margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
						<Entrar fechar={this.btnAction}/>
					</View>
				</Modal>
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
