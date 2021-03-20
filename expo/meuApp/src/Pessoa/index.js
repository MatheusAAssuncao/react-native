import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Pessoa extends Component {
	render() {
		return (
			<View style={styles.areaPessoa}>
				<Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
				<Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
				<Text style={styles.textoPessoa}>E-mail: {this.props.data.email}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	areaPessoa: {
		backgroundColor: "#222",
		height: 200,
		padding: 10,
		marginBottom: 15,
	},
	textoPessoa: {
		color: "#fff",
		fontSize: 18,
	},
});

export default Pessoa;