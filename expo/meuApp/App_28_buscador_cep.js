import React, {useState, useEffect, useMemo, useRef} from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity, TextInput, SafeAreaView, Keyboard } from "react-native";
import api from './src/axios/services/api_busca_cep'

export default function App() {

	const [cep, setCep] = useState(null);
	const [response, setResponse] = useState(null);
	const inputRef = useRef(null);

	function limpar() {
		setCep(null);
		setResponse(null);
		inputRef.current.focus();
	}

	async function buscar() {
		if (cep == '') {
			alert('Digite um CEP válido');
			setCep(null);
			return;
		}

		try {
			const response = await api.get(cep + '/json');
			setResponse(response.data);
			Keyboard.dismiss();
		} catch(error) {
			console.log(error)
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={{alignItems: 'center'}}>
				<Text style={{color: '#000', fontSize: 35, marginTop: 15, marginBottom: 15, fontWeight: 'bold'}}>
					Digite o cep desejado
				</Text>
				<TextInput style={styles.input} placeholder='Ex.: 13473-661' value={cep} onChangeText={(texto) => { setCep(texto)}} keyboardType='numeric' ref={inputRef}/>
			</View>

			<View style={styles.areaBtn}>
				<TouchableOpacity style={[styles.btn, { backgroundColor: 'blue' }]} onPress={buscar}>
					<Text style={styles.textBtn}>
						Buscar
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.btn, { backgroundColor: 'red' }]} onPress={limpar}>
					<Text style={styles.textBtn}>
						Limpar
					</Text>
				</TouchableOpacity>
			</View>

			{ response &&
				<View style={styles.resultado}>
					<Text style={styles.itemText}>CEP: {cep}</Text>
					<Text style={styles.itemText}>Logradouro: {response.logradouro}</Text>
					<Text style={styles.itemText}>Bairro: {response.bairro}</Text>
					<Text style={styles.itemText}>Cidade: {response.localidade}</Text>
					<Text style={styles.itemText}>UF: {response.uf}</Text>
				</View>	
			}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		paddingTop: Platform.OS === "android" ? 35 : 0,
	},
	input: {
		backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', borderRadius: 5, width: '95%', padding: 20, fontSize: 18
	},
	areaBtn: {
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 15,
		justifyContent: 'space-around',
	},
	btn: {
		height: 50, justifyContent: 'center', alignItems: 'center', padding: 15, borderRadius: 5
	},
	textBtn: {
		fontSize: 22, color: 'white'
	},
	resultado: {
		flex: 1, justifyContent: 'center', alignItems: 'center'
	},
	itemText: {
		fontSize: 22
	}
});