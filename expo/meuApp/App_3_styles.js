import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {

    render() {
        return(
            <View style={styles.area}>

                <Text style={[ styles.texto, styles.textoPrincipal ]}>
                    Texto boladão
                </Text>

                <Text style={ styles.texto }>
                    Texto boladão
                </Text>

                <Text style={ styles.texto}>
                    Texto boladão
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    area: {
        height: '100%',
        backgroundColor: 'orange',
        paddingTop: 35
    },
    textoPrincipal: {
        color: 'green',
        fontSize: 25,
    },
    texto: {
        textAlign: 'center',
        fontSize: 18,
    }
});

export default App;