import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import firebase from './src/firebaseConnection';

// remove alerta de consulta no banco
console.disableYellowBox = true;

export default function App() {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');

    async function cadastrar() {
        if (nome !== '' && cargo !== '') {
            let usuarios = await firebase.database().ref('usuarios');
            let key = usuarios.push().key;

            usuarios.child(key).set({
                nome: nome,
                cargo, cargo,
            });

            alert('Cadastrado com sucesso!');
            setCargo('');
            setNome('');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Nome</Text>
            <TextInput styles={styles.input} onChangeText={(texto) => setNome(texto)} value={nome}/>

            <Text style={styles.texto}>Cargo</Text>
            <TextInput styles={styles.input} onChangeText={(texto) => setCargo(texto)} value={cargo}/>

            <Button title="Novo Funcionário" onPress={cadastrar}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 35,
        margin: 10,
    },
    texto: {
        fontSize: 20,
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#121212',
        height: 40,
        fontSize: 17,
    }
});