import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import { loginUsuario } from '../services/api/api';

const LoginView = ({ navigation }) => {
    const [credencial, setCredencial] = useState(''); // Email ou Telefone
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);

    const handleLogin = async () => {
        if (!credencial || !senha) {
            Alert.alert("Erro", "Preencha todos os campos.");
            return;
        }

        setCarregando(true);
        const resultado = await loginUsuario(credencial, senha);
        setCarregando(false);

        if (resultado.erro) {
            Alert.alert("Falha no Login", resultado.message);
        } else {
            Alert.alert("Sucesso", `Bem-vindo, ID: ${resultado.usuario.usuarioId}`);
            // Aqui você navegaria para a Home
            navigation.replace('ListaJogos');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Games Tito</Text>

            <TextInput
                style={styles.input}
                placeholder="E-mail ou Telefone"
                placeholderTextColor="#999"
                value={credencial}
                onChangeText={setCredencial}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#999"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
                disabled={carregando}
            >
                <Text style={styles.buttonText}>
                    {carregando ? "Aguarde..." : "ENTRAR"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text >Cadastro</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginView;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', padding: 25 },
    title: { color: '#00ff9c', fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 40 },
    input: { backgroundColor: '#1e1e1e', color: '#fff', borderRadius: 8, padding: 15, marginBottom: 15 },
    button: { backgroundColor: '#00ff9c', padding: 15, borderRadius: 8, alignItems: 'center' },
    buttonText: { color: '#121212', fontWeight: 'bold', fontSize: 16 }
});