import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ForgotPassView({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Esqueci a senha</Text>
                <Text style={styles.descricao}>Informe seu e-mail cadastrado para receber as instruções de recuperação de senha.</Text>

                <TextInput style={styles.input} placeholder='Email'></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>               

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.link}>Voltar para o login</Text>
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
    },
    descricao: {
        textAlign: 'center',
        fontSize: 14,
        color: '#666',
        marginBottom: 24
    }

})
