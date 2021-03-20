import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Pessoa from "./src/Pessoa";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feed: [
				{ id: "1", nome: "Matheus", idade: "27", email: "matheus.tba@hotmail.com" },
				{ id: "2", nome: "Armando", idade: "29", email: "armando@hotmail.com" },
				{ id: "3", nome: "Julio", idade: "17", email: "Julio@hotmail.com" },
				{ id: "4", nome: "Gubens", idade: "61", email: "Gubens@hotmail.com" },
				{ id: "5", nome: "Graça", idade: "47", email: "Graça@hotmail.com" },
			],
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.feed}
					//keyExtractor={(item) => item.id}
					key={(item) => item.id}
					renderItem={({ item }) => <Pessoa data={item} />}
				/>
			</View>
		);
	}
}
// horizontal={true} por padrão é false.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? 30 : 0,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#00aeef",
	},
});

export default App;
