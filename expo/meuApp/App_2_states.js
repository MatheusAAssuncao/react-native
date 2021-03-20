import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: 'Matheus'
        }

        this.entrar = this.entrar.bind(this);
    }

    entrar() {
        let nome = '';
        if (this.state.nome == 'Matheus') {
            nome = 'Assumption';
        } else {
            nome = 'Matheus'
        }
        this.setState({
            nome: nome
        })
    }

    render() {
        return(
            <View style={{ marginTop: 45 }}>

                <Button title='Entrar' onPress={ () => this.entrar()}/>

                <Text style={{ color: '#ff0000', fontSize: 25, textAlign: 'center', margin: 15 }}>
                    { this.state.nome }
                </Text>
            </View>
        );
    }
}

export default App;