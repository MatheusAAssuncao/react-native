import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pizza: 0,
			pizzas: [
				{ id: '1', nome: 'Strogonoff', valor: 35.90 },
				{ id: '2', nome: 'Quatro Queijos', valor: 37.90 },
				{ id: '3', nome: 'Portuguesa', valor: 41.90 },
				{ id: '4', nome: 'Frango', valor: 29.90 },
			]
		};
	}

	render() {

let pizzaItem = this.state.pizzas.map( (value, key) => {
	return <Picker.Item key={key} value={value.id} label={value.nome}/>
});

		return (
			<View style={styles.container}>
				<Text style={styles.logo}>
					Menu Pizza
				</Text>

				<Picker
					selectedValue={this.state.pizza}
					onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemIndex})}
					>
						{pizzaItem}
				</Picker>

				<Text style={styles.pizza}>
					Você escolheu: {this.state.pizzas[this.state.pizza].nome}
				</Text>
				<Text style={styles.pizza}>
					R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}
				</Text>
			</View>
		);
	}
}
// horizontal={true} por padrão é false.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? 30 : 0,
		backgroundColor: "pink",
		padding: 10,
	},
	logo: {
		fontSize: 25,
		textAlign: 'center',
		marginTop: 10,
		marginBottom: 6,
		fontWeight: 'bold',
	},
	pizza: {
		fontSize: 16,
		marginTop: 15,
	}
});

export default App;
