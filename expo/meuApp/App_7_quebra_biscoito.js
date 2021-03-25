import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default App;