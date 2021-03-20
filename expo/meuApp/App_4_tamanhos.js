import { StatusBar } from 'expo-status-bar';
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
        backgroundColor: '#222',
    },
    header: {
        paddingTop: Platform.OS === 'android' ? 75 : 65,
        height: 65,
        backgroundColor: '#fff',
    },
    areaCentral: {
        flex: 1,
        backgroundColor: 'orange',
    },
    footer: {
        height: 65,
        backgroundColor: '#fff',
    }
});

export default App;