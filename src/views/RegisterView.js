import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert,
} from 'react-native';

export default function RegisterView({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const [loading, setLoading] = useState(false)

    const handleRegister = async () => {
        console.log({
            nome,
            email,
            senha,
            confirmarSenha,
            telefone
        });

        const API_URL = 'http://gamestito.runasp.net/api/Account/register';

        if (senha !== confirmarSenha) {
            Alert.alert('Atenção', 'As senhas não coincidem!');
            return
        }

        if (!nome || !email || !senha || !confirmarSenha || !telefone) {
            Alert.alert('Atenção', 'Preencha todos os campos!')
            return
        }

        try {
            setLoading(true);
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({

                    nomeCompleto: nome,
                    email: email,
                    passwordHash: senha,
                    telefone: telefone || "11999993333"

                })
            });

            if(response.ok){
                Alert.alert('Sucesso','Conta criada com sucesso!');
                navigation.navigate('Login');
            }else{
                const erroData = await response.json();
                const erroMessage = erroData.message || 'Erro ao criar conta!';
                Alert.alert('Erro',erroMessage);
            }
        }
        catch (error) {
            console.log('Erro no cadastro: ', error);
            Alert.alert('Erro', 'O correu um erro ao criar a conta!')
        }
        finally {
            setLoading(false)
        }





    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Criar conta</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome completo"
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Telefone"
                value={telefone}
                keyboardType="phone-pad"
                onChangeText={setTelefone}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

            <TextInput
                style={styles.input}
                placeholder="Confirmar senha"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleRegister}
                disabled={loading}
            >
                {loading ? (
                    <Text style={styles.buttonText}>Carregando ...</Text>
                ) : (
                    <Text style={styles.buttonText}>Cadastrar</Text>
                )
                }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Já tenho uma conta</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 14,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    button: {
        backgroundColor: '#0066cc',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    link: {
        marginTop: 20,
        textAlign: 'center',
        color: '#0066cc',
    },
});
