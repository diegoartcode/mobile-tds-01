import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const ConsoleSelector = () => (
    <View style={consoleStyles.container}>
        {/* Botão Ativo: PS5 */}
        <TouchableOpacity style={[consoleStyles.button, consoleStyles.activeButton]}>
            <MaterialCommunityIcons name="sony-playstation" size={20} color="#FFF" />
            <Text style={consoleStyles.buttonText}>PS5</Text>
        </TouchableOpacity>
        
        {/* Botão Inativo: XBOX */}
        <TouchableOpacity style={consoleStyles.button}>
            <MaterialCommunityIcons name="microsoft-xbox" size={20} color="#888" />
            <Text style={[consoleStyles.buttonText, consoleStyles.inactiveText]}>XBOX</Text>
        </TouchableOpacity>
        
        {/* Botão Inativo: PC */}
        <TouchableOpacity style={consoleStyles.button}>
            <FontAwesome5 name="desktop" size={18} color="#888" />
            <Text style={[consoleStyles.buttonText, consoleStyles.inactiveText]}>PC</Text>
        </TouchableOpacity>
    </View>
);

const consoleStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginBottom: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginRight: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        borderColor: '#444',
    },
    activeButton: {
        backgroundColor: '#9370DB', // Roxo Neon Ativo
        borderColor: '#9370DB',
    },
    buttonText: {
        color: '#FFF',
        marginLeft: 5,
        fontWeight: 'bold',
    },
    inactiveText: {
        color: '#888',
        fontWeight: 'normal',
    }
});

export default ConsoleSelector;