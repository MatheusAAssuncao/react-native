import React from 'react';
import { View, Text, StyleSheet, Animated, Button, TouchableOpacity, TextInput, SafeAreaView, Keyboard } from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";

// popToTop volta para o inicio da pilha

export default function Contato() {

    const navegation = useNavigation();
    
    return (
        <View>
            <Text>Contato</Text>
            <Button title="Voltar tela" onPress={ () => navegation.goBack() }/>
            <Button title="Voltar para home" onPress={ () => navegation.dispatch(StackActions.popToTop) }/>
        </View>
    );
}