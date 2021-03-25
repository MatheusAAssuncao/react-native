import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import api from './src/axios/services/api';
import Filme from './src/axios/filme'

// PRECISA INSTALAR ANTES DE IMPORTAR

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filmes: [],
			loading: true,
		};
	}

	//componentDidMount - Quando o componente é montado em tela
	async componentDidMount() {
		const response = await api.get('r-api/?api=filmes');
		this.setState({
			filmes: response.data,
			loading: false,
		});
	}

	render() {

		if (this.state.loading) {
			return (
				<View style={styles.loading}>
					<ActivityIndicator color='blue' size={60}/>
				</View>
			)
		} else {
			return (
				<View style={styles.container}>
					<FlatList 
					data={this.state.filmes}
					keyExtractor={item => item.id.toString()}
					renderItem={ ({item}) => <Filme data={item}/> }
					style={styles.flatlist}/>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: Platform.OS === "android" ? 35 : 0,
		marginTop: 30,
	},
	loading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});

export default App;
