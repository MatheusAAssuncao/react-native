import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import api from './api'

class Conversor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			valorConvertido: 0,
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaB_valor: 0,
		};

        this.converter = this.converter.bind(this);
	}

    async converter() {
        let de_para = this.state.moedaA +"_"+ this.state.moedaB;
        const response = await api.get(`/convert?q=${de_para}&compact=ultra&apiKey=07b20c75b79253d30219`);
		this.setState({
			valorConvertido: response.data[de_para] * parseFloat(this.state.moedaB_valor),
		});
    }

	render() {

        const { moedaA, moedaB } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>
                    {moedaA} para {moedaB}
                </Text>
                <TextInput
                placeholder="Valor a ser convertido"
                style={styles.areaInput}
                onChangeText={(value) => {this.setState({moedaB_valor: value})}}
                keyboardType="numeric"
                />

                <TouchableOpacity style={styles.botaoArea} onPress={this.converter}>
                    <Text style={styles.botaoTexto}>
                        Converter
                    </Text>
                </TouchableOpacity>

                <Text style={styles.valorConvertido}>
                    {this.state.valorConvertido.toFixed(2)}
                </Text>
            </View>
        );
	}
}
// horizontal={true} por padrão é false.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
        alignItems: 'center',
	},
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    areaInput: {
        width: 280,
        height: 45,
        backgroundColor: '#CCC',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
        color: 'black',
        borderRadius: 5,
    },
    botaoArea: {
        width: 150,
        height: 45,
        backgroundColor: 'red',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    botaoTexto: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',

    },
    valorConvertido: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 15,
    },
    loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});

export default Conversor;
