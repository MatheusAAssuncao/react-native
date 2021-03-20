import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {

    render() {
        return(
            <View style={styles.area}>
                <View style={styles.header}>

                </View>
                <View style={styles.areaCentral}>

                </View>
                <View style={styles.footer}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    area: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        //se flexDirection == 'row', justifyContent é linha e alignItems é coluna
        //se flexDirection == 'column', interve
        //justifyContent: 'flex-end' ou 'space-between' ou 'space-around',
        //alignItens: 'center' ou 'flex-end' ou 'flex-end',
        alignItems: 'center',
        backgroundColor: '#222',
    },
    header: {
        width: 50, height: 50,
        backgroundColor: '#fff',
    },
    areaCentral: {
        width: 50, height: 50,
        backgroundColor: 'orange',
    },
    footer: {
        width: 50, height: 50,
        backgroundColor: '#fff',
    }
});

export default App;