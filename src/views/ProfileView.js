import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScrollView } from 'react-native-gesture-handler';

export default function ProfileView({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.userInfoContainer}>
                        <View style={styles.avatarContainer}>
                            <Ionicons name='person-circle' size={100} color='#ccc' />
                        </View>

                        <Text style={styles.userName}>Diego Rodrigues</Text>
                        <Text style={styles.userEmail}>diego@email.com</Text>

                        <TouchableOpacity style={styles.editButton}>
                            <Text style={styles.editButtonText}>Editar Perfil</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuContainer}>
                        <MenuItem icon='cart-outline' text='Meus Pedidos' onPress={() => navigation.navigate('MyOrders')} />
                        <MenuItem icon='heart-outline' text='Lista de Desejos' onPress={() => navigation.navigate('Wishlint')} />
                        <MenuItem icon='settings-outline' text='Configurações' onPress={() => navigation.navigate('Settings')} />
                        <MenuItem icon='help-circle-outline' text='Ajuda e Suporte' onPress={() => navigation.navigate('HelpSupportView')} />

                        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}>
                            <View style={styles.menuItemIcon}>
                                <Ionicons name='log-out-outline' size={20} color="#ff6347" />
                            </View>
                            <Text style={[styles.menuItemText, {color:'#ff6347'}]}>Sair</Text>                          
                        </TouchableOpacity>

                        
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#32343a',
        flex: 1
    },
    userInfoContainer: {
        alignItems: 'center',
        paddingVertical: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#2c2c2c'
    },
    avatarContainer: {
        marginBottom: 10
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5
    },
    userEmail: {
        fontSize: 14,
        color: '#888',
        marginBottom: 20
    },
    editButton: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#9370db'
    },
    editButtonText: {
        color: '#9370db',
        fontWeight: '600'
    },
    menuContainer: {
        marginTop: 10
    },

    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    menuItemIcon: {
        width: 40,
        alignItems: 'flex-start'
    },
    menuItemText: {
        flex: 1,
        fontSize: 16,
        color: '#fff',
        marginLeft: 10
    }
})


const MenuItem = ({ icon, text, onPress }) => (

    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
        <View style={styles.menuItemIcon}>
            <Ionicons name={icon} size={20} color="#666" />
        </View>

        <Text style={styles.menuItemText}>{text}</Text>
        <Ionicons name='chevron-forward' size={20} color="#666" />

    </TouchableOpacity>

);


// log-out-outline
// text sair - cor texto #ff6347
// valta para login
