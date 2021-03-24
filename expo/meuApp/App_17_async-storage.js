import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// PRECISA INSTALAR ANTES DE IMPORTAR

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			nome: '',
		};

		this.gravaNome = this.gravaNome.bind(this);
	}

	//componentDidMount - Quando o componente é montado em tela
	async componentDidMount() {
		await AsyncStorage.getItem('nome').then((value) => {
			this.setState({
				nome: value,
			});
		});
	}

	//componentDidUpdate - Quando o state é atualizado
	async componentDidUpdate(prevProps, prevState) {
		const nome = this.state.nome;
		if (prevState !== nome) {
			await AsyncStorage.setItem('nome', nome);
		}
	}

	gravaNome() {
		this.setState({
			nome: this.state.input
		});
		alert('Salvo com sucesso!');
		Keyboard.dismiss(); // retira o teclado
	}

	render() {

		return (
			<View style={styles.container}>
				<View style={styles.viewInput}>
					<TextInput
					style={styles.input}
					value={this.state.input}
					underlineColorAndroid='transparent'
					onChangeText={(text) => this.setState({
						input: text
					})}
					/>

					<TouchableOpacity onPress={this.gravaNome}>
						<Text style={styles.botao}>
							+
						</Text>
					</TouchableOpacity>
				</View>

				<Text style={styles.nome}>
					{this.state.nome}
				</Text>
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
		marginTop: 30,
		alignItems: 'center',
	},
	viewInput: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		flex: 1,
		height: 40,
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
	}, 
	botao: {
		backgroundColor: '#222',
		color: 'white',
		height: 40,
		padding: 10,
		marginLeft: 4,
	},
	nome: {
		marginTop: 10,
		textAlign: 'center',
		fontSize: 20,
	}
});

export default App;
