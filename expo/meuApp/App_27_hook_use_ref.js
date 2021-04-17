import React, {useState, useEffect, useMemo, useRef} from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

	const [nome, setNome] = useState('');
	const [input, setInput] = useState('');
	const nomeInput = useRef(null);

	useEffect(() => {

		async function getStorage() {
			const nomeStorage = await AsyncStorage.getItem('nomes');
			if (nomeStorage !== null) {
				setNome(nomeStorage);
			}
		}

		getStorage();

		//return() => {};

	}, []); // Como eu não passo nenhuma variavel aqui, toda vez que iniciar a tela ele executa esta função

	useEffect(() => {

		async function saveStorage() {
			await AsyncStorage.setItem('nomes', nome);
		}

		saveStorage();

	}, [nome]); // Toda vez que a variavel nome for alterada executa a função

	function alteraNome() {
		setNome(input);
		setInput('');
	}

	function novoNome() {
		nomeInput.current.focus();
	}

	let letrasNome = useMemo(() => {
		console.log('mudou');
		return nome.length;
	}, [nome]); // executa e atribui à letrasNome apenas com mudança na variavel nome

	return (
		<View style={styles.container}>
			<TextInput style={{height: 55}} placeholder='Seu Nome' value={input} onChangeText={(texto) => setInput(texto)} ref={nomeInput}/>
			<TouchableOpacity style={{height: 35, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center'}} onPress={alteraNome}>
				<Text style={{color: 'white'}}>
					Altera Nome
				</Text>
			</TouchableOpacity>
			<Text style={{color: '#000', fontSize: 35}}>
				{ nome }
			</Text>
			<Text style={{color: '#000', fontSize: 35}}>
				Tem { letrasNome } letras.
			</Text>

			<TouchableOpacity onPress={novoNome}>
				<Text>
					Novo nome
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? 35 : 0,
		padding: 10,
	}
});