import React from 'react';
import { View, Text, StyleSheet, Animated, Button, TouchableOpacity, TextInput, SafeAreaView, Keyboard, LogBox } from "react-native";
import { useNavigation } from "@react-navigation/native";

// remove alerta de consulta no banco
LogBox.ignoreAllLogs();

export default function Home({ route }) {

    var navegation = useNavigation();
    navegation.setOptions({
        title: `Bem-vindo ${route.params?.email}`,
    });

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Sair" onPress={() => navegation.navigate('Login') }/>
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