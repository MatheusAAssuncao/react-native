import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, LogBox } from 'react-native';
import firebase from './src/firebaseConnection';

// remove alerta de consulta no banco
LogBox.ignoreAllLogs();

export default function App() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    async function cadastrar() {
        await firebase.auth().createUserWithEmailAndPassword(email, pass).then((value) => {
            alert('Usuário criado ' + value.user.email);
        }).catch((error) => {
            if (error.code == 'auth/weak-password') {
                alert('Sua senha deve ter pelo menos 6 caracteres');
            } else if (error.code == 'auth/invalid-email') {
                alert('E-mail inválido');
            } else {
                alert('Ops, algo deu errado');
            }
            return;
        });

        setEmail('');
        setPass('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>E-mail</Text>
            <TextInput style={styles.input} onChangeText={(texto) => setEmail(texto)} value={email} 
                autoCompleteType="email" autoCapitalize="none" keyboardType="email-address" autoCorrect={false}/>

            <Text style={styles.texto}>Senha</Text>
            <TextInput style={styles.input} onChangeText={(texto) => setPass(texto)} value={pass} secureTextEntry={true}/>

            <Button title="Cadastrar" onPress={cadastrar}/>
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