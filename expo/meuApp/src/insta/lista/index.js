import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class Lista extends Component {

    constructor(props) {
		super(props);
		this.state = {
            feed: this.props.data,
        }

        this.mostraLikes = this.mostraLikes.bind(this);
        this.curtir = this.curtir.bind(this);
        this.carregaIcone = this.carregaIcone.bind(this);
    }

    mostraLikes() {
        let feed = this.state.feed;
        if (feed.likers <= 0) {
            return;
        } else {
            return(
                <Text style={styles.likes}>
                    {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
                </Text>
            );
        }
    }

    curtir() {
        let feed = this.state.feed;
        if (feed.likeada === true) {
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers-1
                }
            });
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers+1
                }
            });
        }
    }

    carregaIcone() {
        let feed = this.state.feed;
        return feed.likeada ? require('../img/likeada.png') : require('../img/like.png');
    }

    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.perfil}>
                    <Image
                    source={{uri: this.state.feed.imgperfil}}
                    style={styles.imgPerfil}/>

                    <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
                </View>

                <Image
                    resizeMode='cover'
                    source={{uri: this.state.feed.imgPublicacao}}
                    style={styles.fotoFeed}/>

                <View style={styles.areaIcone} >
                    <TouchableOpacity onPress={this.curtir}>
                        <Image
                        source={this.carregaIcone()} 
                        style={styles.iconeLike} 
                        />  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSend}>
                        <Image
                        source={require('../img/send.png')} 
                        style={styles.iconeLike} 
                        />  
                    </TouchableOpacity>                    
                </View>

                {this.mostraLikes()}

                <View style={styles.areaRodape}>
                    <Text style={styles.nomeRodape}>{this.state.feed.nome}</Text>

                    <Text style={styles.descRodape}>{this.state.feed.descricao}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		marginTop: 7,
        marginBottom: 7,
	},
    perfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 5,
    },
    imgPerfil: {
        width: 45,
        height: 45,
        borderRadius: 25,
	},
    nomeUsuario: {
        fontSize: 20,
        textAlign: 'left',
        color: 'black',
        marginLeft: 8,
    },
    fotoFeed: {
        flex: 1,
        height: 400,
        alignItems: 'center',
    },
    areaIcone: {
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike: {
        width: 30,
        height: 30,
    },
    btnSend: {
        paddingLeft: 9,
    },
    areaRodape: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    nomeRodape: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    descRodape: {
        paddingLeft: 7,
        fontSize: 15,
        color: 'black'
    },
    likes: {
        paddingLeft: 5,
        fontWeight: 'bold',
    },
});

export default Lista;