import {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginView({navigation}) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handlerLogin = () => {
        console.log('E-mail: ', email);
        console.log('Senha: ', senha);
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
    container:{
        flex:1,
        backgroundColor: '#f5f5f5',
        justifyContent:'center',
        padding:24
    },
    title:{
        fontSize: 32,
        fontWeight:'bold',
        marginBottom: 32,
        textAlign:'center',
        color:'#333'
    },
    input:{
        backgroundColor:'#fff',
        borderRadius: 8,
        padding: 14,
        marginBottom:16,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    button:{
        backgroundColor:'#0066cc',
        padding:15,
        borderRadius:8,
        alignItems:'center',
        marginTop: 8
    },
    buttonText:{
        color:'#fff',
        textAlign:'center',
        fontSize: 16
    },
    link:{
        marginTop:16,
        textAlign:'center',
        color:'#0066cc'
    }

})
