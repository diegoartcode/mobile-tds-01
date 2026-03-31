import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// AsyncStorage - para salvar dados localmente no celular
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginView({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const API_URL = 'http://10.0.2.2:5203/api/Account/login'

    const handlerLogin = async () => {
        console.log('E-mail: ', email);
        console.log('Senha: ', senha);

        if (!email || !senha) {
            Alert.alert('Atenção', 'Preencha email e senha');
            return
        }

        try {
            const response = await fetch(
                `${API_URL}`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json" //Tipo de conteudo enviado
                    }
                    ,
                    body: JSON.stringify({
                        email: email,
                        passwordHash: senha
                    })

                }
            );

            let data;
            try {
                // tenta converter a resposta para JSON
                data = await response.json();
            }
            catch {
                data = {};
            }

            if (!response.ok) {
                Alert.alert('Erro', data?.message || "Falha no login")
            }

            console.log('Data: ', data);



            if (response.ok) {

                alert(data.message)
                // salva os dados do usuario no armazenamento local (celular)
                try {
                    await AsyncStorage.setItem('user', JSON.stringify(data));
                } catch (error) {
                    Alert.alert('testetesetetetesse')
                }

                Alert.alert('Sucesso', 'Login realizado com sucesso!');


                if (navigation) {
                    navigation.navigate('Home')
                }
            } else {
                Alert.alert('Erro', data?.message || 'E-mail ou senha invalida')
            }

        }
        catch (error) {

        }

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>

                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                ></TextInput>


                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                ></TextInput>
                <TouchableOpacity style={styles.button} onPress={handlerLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.link}>Cadastro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
                    <Text style={styles.link}>Esqueci a senha</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        padding: 24
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 32,
        textAlign: 'center',
        color: '#333'
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 14,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    button: {
        backgroundColor: '#0066cc',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16
    },
    link: {
        marginTop: 16,
        textAlign: 'center',
        color: '#0066cc'
    }

})
