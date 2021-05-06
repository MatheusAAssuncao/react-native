import React, { useState, useEffect } from 'react';
import { View, Text, LogBox } from 'react-native';
import firebase from './src/firebaseConnection';

// remove alerta de consulta no banco
LogBox.ignoreAllLogs();

export default function App() {
    const [nome, setNome] = useState('Carregando...');
    const [idade, setIdade] = useState('');

    useEffect(() => {
        async function dados() {

            // monitor de alteração do database automático. atualiza automaticamente
            // await firebase.database().ref('usuarios/0').on('value', (snapshot) => {
            //     setNome(snapshot.val().nome);
            //     setIdade(snapshot.val().idade);
            // });

            // busca apenas uma vez no database
            // await firebase.database().ref('usuarios/1').once('value', (snapshot) => {
            //     setNome(snapshot.val().nome);
            //     setIdade(snapshot.val().idade);
            // });

            // cria um nó
            // const teste = [{"altura": 155, "peso": 85}, {"altura": 201, "peso": 98}];
            // await firebase.database().ref('tipo').set(teste);

            // remove um nó
            // await firebase.database().ref('tipo').remove();

            // cria um nó
            // await firebase.database().ref('usuarios').child(2).set({
            //     idade: 22,
            //     nome: "Jéssica",
            // });

            // atualiza um nó
            // await firebase.database().ref('usuarios').child(2).update({
            //     nome: "Jéssica Paiva",
            // });
        }

        dados();
    }, []);

    return (
        <View style={{marginTop: 35}}>
            <Text>Integração Firebase</Text>
            <Text style={{fontSize: 25}}>Olá {nome}</Text>
            <Text style={{fontSize: 25}}>Idade {idade}</Text>
        </View>
    );
}