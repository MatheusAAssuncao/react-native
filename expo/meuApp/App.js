import React, { Component } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {

		return (
			<View style={styles.container}>
				
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
