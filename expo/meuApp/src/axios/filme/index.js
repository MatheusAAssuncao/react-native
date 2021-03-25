import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class Filme extends Component {
    render() {
        const { nome, foto, sinopse } = this.props.data;
        return (
            <View>

                <View style={styles.card}>

                    <Text style={styles.titulo}>
                        {nome}
                    </Text>

                    <Image
                    style={styles.capa}
                    source={{ uri: foto }}/>

                    <View style={styles.btnArea}>

                        <TouchableOpacity style={styles.btn} onPress={() => alert(sinopse)}>
                            <Text style={styles.btnTexto}>
                                LEIA MAIS
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        backgroundColor: 'white',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3,
    },
    titulo: {
        fontSize: 18,
        padding: 15,
    },
    capa: {
        height: 250,
        zIndex: 2,
    },
    btn: {
        width: 100,
        backgroundColor: 'blue',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
    },
    btnArea: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9,
    },
    btnTexto: {
        textAlign: 'center',
        color: 'white',
    },

});

export default Filme;