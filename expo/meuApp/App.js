import React, {useState, useEffect, useMemo, useRef} from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity, TextInput, SafeAreaView, Keyboard } from "react-native";

export default function App() {

	const [nome, setNome] = useState(null);

	return (
		<SafeAreaView style={styles.container}>
			<View style={{alignItems: 'center'}}>
				<Text style={{color: '#ccc', fontSize: 35, fontWeight: 'bold'}}>
					Hello World
				</Text>
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
});