import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator, LogBox } from 'react-native';
import firebase from './src/firebaseConnection';
import Listagem from './src/firebase/Listagem'

// remove alerta de consulta no banco
LogBox.ignoreAllLogs();

export default function App() {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function dados() {

            // monitor de alteração do database automático. atualiza automaticamente
            await firebase.database().ref('usuarios').on('value', (snapshot) => {
                setUsuarios([]);
                snapshot.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        nome: childItem.val().nome,
                        cargo: childItem.val().cargo,
                    };
                    // o reverse serve para aparecer em ordem decrescente
                    setUsuarios(oldArray => [...oldArray, data].reverse());
                });
                setLoading(false);
            });
        }

        dados();
    }, []);

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
            <TextInput style={styles.input} onChangeText={(texto) => setNome(texto)} value={nome}/>

            <Text style={styles.texto}>Cargo</Text>
            <TextInput style={styles.input} onChangeText={(texto) => setCargo(texto)} value={cargo}/>

            <Button title="Novo Funcionário" onPress={cadastrar}/>

            {loading ? (
                <ActivityIndicator color='#121212' size={45} />
            ) :
            (
                <FlatList keyExtractor={item => item.key} data={usuarios} renderItem={ ({item}) => ( <Listagem data={item}/>) }/>
            )
            }
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