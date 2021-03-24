import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// PRECISA INSTALAR ANTES DE IMPORTAR

class Entrar extends Component {

	render() {

		return (
			<View style={{backgroundColor: '#292929', width: '100%', height: 350, borderRadius: 15}}>
                <Text style={{color: '#FFF', fontSize: 28, paddingTop: 15, textAlign: 'center'}}>Seja bem-vindo!</Text>
                <Button title="Sair" onPress={this.props.fechar}/>
            </View>
		);
	}
}

export default Entrar;
