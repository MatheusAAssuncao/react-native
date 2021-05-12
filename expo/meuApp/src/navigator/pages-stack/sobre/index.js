import React from 'react';
import { View, Text, StyleSheet, Animated, Button, TouchableOpacity, TextInput, SafeAreaView, Keyboard } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function Sobre({ route }) {

    var navegation = useNavigation();
    navegation.setOptions({
        title: `Sobre ${route.params?.nome}`,
    });
    return (
        <View>
            <Text>Sobre</Text>
            <Text>{route.params?.nome}</Text>
            <Text>{route.params?.idade}</Text>
            <Button title="Voltar para home" onPress={ () => navegation.goBack() }/>
            <Button title="Contato" onPress={ () => navegation.navigate('Contato') }/>
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