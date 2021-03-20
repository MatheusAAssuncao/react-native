import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Switch, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: '',
			idade: '',
			sexo: '',
			limite: 1000,
			estudante: false,

		};

		this.entrar = this.entrar.bind(this);
	}

	entrar() {
		let obj = this.state;
		if (obj.nome == '') {
			alert('Preencha o nome!');
			return;
		}
		if (obj.idade == '') {
			alert('Preencha a idade!');
			return;
		}
		if (obj.limite == 1000) {
			alert('Defina um limite!');
			return;
		}
	}

	render() {

		return (
			<View style={styles.container}>

				<Text style={styles.titulo}>
					Banco React
				</Text>

				<Text style={styles.label}>
					Nome
				</Text>
				
				<TextInput 
                    style={styles.input} 
                    underlineColorAndroid='transparent'
                    onChangeText={ (texto) => this.setState({ nome: texto }) }/>

				<Text style={styles.label}>
					Idade
				</Text>

				<TextInput 
                    style={styles.input} 
                    underlineColorAndroid='transparent'
                    onChangeText={ (texto) => this.setState({ idade: texto }) }/>

				<Text style={styles.label}>
					Sexo
				</Text>

				<Picker
					selectedValue={this.state.sexo}
					onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}
					>
					<Picker.Item key={0} value={''} label='Selecione'/>
					<Picker.Item key={1} value={'Masculino'} label='Masculino'/>
					<Picker.Item key={2} value={'Feminino'} label='Feminino'/>
				</Picker>

				<Text style={styles.label}>
					Seu Limite
				</Text>

				<Slider 
					minimumValue={1000}
					maximumValue={20000}
					onValueChange={ (selected) => this.setState({ limite: selected })}
					value={this.state.limite}
				/>

				<Text style={styles.label}>
					Estudante
				</Text>

				<Switch 
					value={this.state.estudante}
					onValueChange={ (value) => this.setState({ estudante: value }) }
				/>
				
				<TouchableOpacity style={styles.btn} onPress={this.entrar}>
					<Text style={styles.btnTexto}>ABRIR CONTA</Text>
				</TouchableOpacity>
	
			</View>
		);
	}
}
// horizontal={true} por padrão é false.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? 30 : 0,
		padding: 10,
	},
	titulo: {
		textAlign: 'center',
		fontSize: 25,
		fontWeight: 'bold',
		marginTop: 7,
		marginBottom: 10,
	},
	label: {
		fontSize: 18,
		marginTop: 10,
	},
	input: {
        height: 35,
        borderWidth: 1,
        borderColor: '#222',
        marginTop: 5,
		marginBottom: 5,
        fontSize: 16,
        padding: 10,
    },
	submitButton: {
		marginTop: 15,
	},
	btn:{
		alignItems: 'center',
		backgroundColor: 'white',
		marginTop: 25,
		padding: 10,
		borderStyle: "solid",
		borderWidth: 2,
		borderColor: '#00aeef',
		borderRadius: 20
	},
	btnTexto:{
		fontSize: 20,
		fontWeight: 'bold',
		color: '#00aeef'
	},
});

export default App;
