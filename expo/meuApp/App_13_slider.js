import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from '@react-native-community/slider';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			valor: 50
		};
	}

	render() {

		return (
			<View style={styles.container}>

				<Slider 
					minimumValue={0}
					maximumValue={100}
					onValueChange={ (selected) => this.setState({ valor: selected })}
					value={this.state.valor}
					minimumTrackTintColor='red'
					maximumTrackTintColor='blue'
				/>

				<Text>
					{this.state.valor.toFixed(0)}
				</Text>
			</View>
		);
	}
}
// horizontal={true} por padrão é false.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? 30 : 0,
		backgroundColor: "pink",
		padding: 10,
	}
});

export default App;
