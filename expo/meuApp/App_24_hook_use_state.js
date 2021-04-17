import React, {useState} from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity, TextInput } from "react-native";

export default function App() {

	const [nome, setNome] = useState('Juvenal');
	const [input, setInput] = useState('');

	function alteraNome() {
		setNome(input);
	}

	return (
		<View style={styles.container}>
			<TextInput placeholder='Seu Nome' value={input} onChangeText={(texto) => setInput(texto)} style={{height: 55}}/>
			<TouchableOpacity style={{height: 35, backgroundColor: '#222', alignItems: 'center'}} onPress={alteraNome}>
				<Text style={{color: 'white'}}>
					Altera Nome
				</Text>
			</TouchableOpacity>
			<Text style={{color: '#000', fontSize: 35}}>
				{ nome }
			</Text>
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