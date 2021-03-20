import React, { Component } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: false
		};
	}

	render() {

		return (
			<View style={styles.container}>

				<Switch 
					value={this.state.status}
					onValueChange={ (value) => this.setState({ status: value}) }
					thumbColor='red'
				/>

				<Text>
					{(this.state.status) ? 'Ativo' : 'Inativo'}
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
