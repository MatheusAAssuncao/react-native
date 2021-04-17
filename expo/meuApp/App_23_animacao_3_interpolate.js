import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity } from "react-native";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			larAnimada: new Animated.Value(0),
			altAnimada: new Animated.Value(35),
			opAnimada: new Animated.Value(0),
			opAnimadaTxt: new Animated.Value(0),
		};

		Animated.timing(
			this.state.larAnimada,
			{
				toValue: 100,
				duration: 3000,
				useNativeDriver: false,
			}
		).start();
	}

	render() {

		let porcentagemAnimate = this.state.larAnimada.interpolate({
			inputRange: [0, 100],
			outputRange: ['0%', '100%'],
		});

		return (
			<View style={styles.container}>
				<Animated.View style={{ width: porcentagemAnimate, height: 25, backgroundColor: '#4169E1'}}>
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
		alignItems: 'flex-start',
	}
});

export default App;
