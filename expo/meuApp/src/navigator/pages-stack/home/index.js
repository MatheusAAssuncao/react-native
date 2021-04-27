import React from 'react';
import { View, Text, StyleSheet, Animated, Button, TouchableOpacity, TextInput, SafeAreaView, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {

    const navegation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Ir para Sobre" onPress={() => navegation.navigate('Sobre', { nome: 'Matheus', idade: 27 }) }/>
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		paddingTop: Platform.OS === "android" ? 35 : 0,
	},
});