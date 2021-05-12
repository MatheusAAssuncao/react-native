import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, LogBox } from 'react-native';
import firebase from '../../firebaseConnection';
import { useNavigation } from "@react-navigation/native";

// remove alerta de consulta no banco
LogBox.ignoreAllLogs();

export default function Login({ route }) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [user, setUser] = useState('');

    var navegation = useNavigation();

    async function entrar() {
        await firebase.auth().signInWithEmailAndPassword(email, pass).then((value) => {
            navegation.navigate('Home', { email: value.user.email })
        }).catch((error) => {
            alert('Ops, algo deu errado');
            return;
        });

        setEmail('');
        setPass('');
    }

    async function sair() {
        await firebase.auth().signOut();
        setUser('');
        alert('Você saiu.');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>E-mail</Text>
            <TextInput style={styles.input} onChangeText={(texto) => setEmail(texto)} value={email} 
                autoCompleteType="email" autoCapitalize="none" keyboardType="email-address" autoCorrect={false}/>

            <Text style={styles.texto}>Senha</Text>
            <TextInput style={styles.input} onChangeText={(texto) => setPass(texto)} value={pass} secureTextEntry={true}/>

            <Button title="Entrar" onPress={entrar}/>

            <Text style={{marginTop: 20, marginBottom: 20, fontSize: 23, textAlign: 'center'}}>{user}</Text>
            
            {user.length > 0 ? 
            (
                <Button title="Sair" onPress={sair}/>
            ) : 
            (
                <Text style={{marginTop: 20, marginBottom: 20, fontSize: 23, textAlign: 'center'}}>Nenhum usuário logado</Text>
            )}
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