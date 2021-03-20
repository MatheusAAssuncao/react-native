import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
    };

  }

  render(){
    return(
      <View style={styles.container}>  
        <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
          <View style={styles.box1}>

          </View>

          <View style={styles.box2}>
            
          </View>

          <View style={styles.box3}>
            
          </View>
        </ScrollView>
      </View>    
    );
  }

}
// horizontal={true} por padrão é false.
const styles = StyleSheet.create({
  container:{
    flex:1,
    //alignItems:'center',
    //justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  box1:{
    height: 450,
    width: 250,
    backgroundColor: 'red'
  },
  box2:{
    height: 450,
    width: 250,
    backgroundColor: 'green'
  },
  box3:{
    height: 450,
    width: 250,
    backgroundColor: 'yellow'
  }
});

export default App;