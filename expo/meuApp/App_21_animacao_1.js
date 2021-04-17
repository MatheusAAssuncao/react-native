import React, { Component } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			larAnimada: new Animated.Value(150),
			altAnimada: new Animated.Value(50),
			opcAnimada: new Animated.Value(1),
		};

		// Pode ser sequence ou parallel
		Animated.loop(
			Animated.sequence([
				Animated.timing(
					this.state.larAnimada, 
					{
						toValue: 300,
						duration: 700,
						useNativeDriver: false,
					}
				),
		
				Animated.timing(
					this.state.altAnimada, 
					{
						toValue: 150,
						duration: 700,
						useNativeDriver: false,
					}
				),
			
			])
		).start();

		// Animated.timing(
		// 	this.state.opcAnimada, 
		// 	{
		// 		toValue: 0,
		// 		duration: 2000,
		// 		useNativeDriver: false,
		// 	}
		// ).start();
	}

	render() {

		return (
			<View style={styles.container}>
				<Animated.View style={{width: this.state.larAnimada, height: this.state.altAnimada, backgroundColor: 'blue', justifyContent: 'center', opacity: this.state.opcAnimada}}>
					<Text style={{fontSize: 22, color: 'white', textAlign: 'center'}}>
						Carregando...
					</Text>
				</Animated.View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? 35 : 0,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default App;
