import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function HeaderBar({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Ionicons name='search' size={20} color='#888' style={styles.searchIcon} />
                <TextInput style={styles.searchInput} placeholder="Busca jogos, console" placeholderTextColor='#888' />
            </View>
            <View style={styles.accountContainer}>
                <TouchableOpacity style={styles.accountButton} onPress={() => navigation.navigate('ProfileView')}>
                {/* <TouchableOpacity style={styles.accountButton} onPress={() => navigation.navigate('ProfileView')}> */}
                    <Ionicons name='person-circle-outline' size={30} color='#fff' />
                    <Text style={styles.accountText}>Minha conta</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <MaterialCommunityIcons name='cart-outline' size={30} color="#ff8c00" />
                    <View style={styles.cartBadge}>
                        <Text style={styles.textCartBadge}>50</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    searchIcon: {
        marginRight: 8
    },
    searchInput: {
        flex: 1,
        color: '#fff'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        paddingHorizontal: 10,
        flex: 1,
        marginRight: 10,
        height: 40,
        borderRadius: 20
    },
    accountContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cartBadge: {
        position: 'absolute',
        top: 0 ,
        right: 0,
        width:15,
        height: 15,
        borderRadius: 10,
        backgroundColor: 'red',
        // borderWidth: 1,
        // borderColor: '#000',      
    },
    textCartBadge:{
        flex:1,        
        fontSize: 10,
        alignSelf:'center',
        color: '#fff'   
    },
    accountButton:{
        alignItems:'center',
        marginRight:15
    },
    accountText:{
        color:'#fff',
        fontSize:10
    }

})