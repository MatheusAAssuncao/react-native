import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity } from "react-native";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			larAnimada: new Animated.Value(150),
			altAnimada: new Animated.Value(35),
			opAnimada: new Animated.Value(0),
			opAnimadaTxt: new Animated.Value(0),
		};

		this.carregarGrafico = this.carregarGrafico.bind(this);
	}

	carregarGrafico() {
		Animated.sequence([
			Animated.timing(
				this.state.opAnimada,
				{
					toValue: 1,
					duration: 400,
					useNativeDriver: false,
				}
			),
			Animated.timing(
				this.state.altAnimada,
				{
					toValue: 300,
					duration: 1000,
					useNativeDriver: false,
				}
			),
			Animated.timing(
				this.state.opAnimadaTxt,
				{
					toValue: 1,
					duration: 200,
					useNativeDriver: false,
				}
			),
		]).start();
	}

	render() {

		return (
			<View style={styles.container}>
				<View style={{ height: 80, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: 'blue'}}>
					<TouchableOpacity onPress={this.carregarGrafico}>
						<Text style={{fontSize: 25, color: 'white'}}>Gerar Gráfico</Text>
					</TouchableOpacity>
				</View>

				<View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
					<Animated.View style={{opacity: this.state.opAnimadaTxt}}>
						<Text>Vendas</Text>
					</Animated.View>
					
					<Animated.View style={{width: this.state.larAnimada, height: this.state.altAnimada, backgroundColor: 'blue', justifyContent: 'center', opacity: this.state.opAnimada}}>
						<Text style={{fontSize: 22, color: 'white', textAlign: 'center'}}>
							R$ 150,00
						</Text>
					</Animated.View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? 35 : 0,
		padding: 10,
		// justifyContent: 'center',
		// alignItems: 'center',
	}
});

export default App;
