import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
    render() {

        let nome = 'Matheus';
        
        return(
            <View>
                <Text style={{ color: '#ff0000', fontSize: 25, marginTop: 25, margin: 15 }}>
                    Meu primeiro app!
                </Text>

                <Jobs largura={'100%'} altura={300} nome='Floresta Negra'/>

                <Text style={{ fontSize: 30 }}>
                    {nome}
                </Text>
            </View>
        );
    }
}

class Jobs extends Component {
    render() {
        let img = 'https://piaui.folha.uol.com.br/wp-content/uploads/2021/01/floresta_190121_interna.jpg';

        return(
            <View>
                <Image
                    style={{ width: this.props.largura, height: this.props.altura }}
                    source={{ uri: img, }}
                />

                <Text style={{ fontSize: 16, alignSelf: 'center' }}>{this.props.nome}</Text>
            </View>
        );
    }
}

export default App;