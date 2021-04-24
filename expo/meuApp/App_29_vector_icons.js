import React, {useState, useEffect, useMemo, useRef} from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity, TextInput, SafeAreaView, Keyboard } from "react-native";
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

// Biblioteca de consulta dos ícones disponíveis no expo: https://icons.expo.fyi/

export default function App() {

	const [nome, setNome] = useState(null);

	return (
		<SafeAreaView style={styles.container}>
			<View style={{alignItems: 'center'}}>
				<Text style={{color: '#ccc', fontSize: 35, fontWeight: 'bold'}}>
					Hello World
				</Text>
				<Ionicons name="checkmark-circle" size={35} color="green" />

				<FontAwesome name="wechat" size={35} color="green" />

				<TouchableOpacity style={styles.btn}>
					<MaterialCommunityIcons name="chat" size={20} color="white" />
					<Text style={{color: 'white', fontSize: 20}}>Abrir chat</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		paddingTop: Platform.OS === "android" ? 35 : 0,
	},
	btn: {
		flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: 150, padding: 5, backgroundColor: 'green', borderRadius: 5
	}
});