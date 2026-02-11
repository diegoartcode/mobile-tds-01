import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Shadow } from 'react-native-shadow-2';

const TABS = [
    { id: '1', name: 'Início', icon: 'home', isCurrent: true, route: 'Home' },
    { id: '2', name: 'Categoria', icon: 'list', isCurrent: true, route: 'Categoria' },
    { id: '3', name: 'Desejos', icon: 'heart', isCurrent: true, route: 'Desejos' },
    { id: '4', name: 'Pedidos', icon: 'mail', isCurrent: true, route: '' },
    { id: '5', name: 'Perfil', icon: 'person', isCurrent: true, route: 'Login' }
]

const TabItem = ({ item, navigation }) => {
    return (
        <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate(item.route)}>
            <Ionicons name={`${item.icon}-outline`} size={24} color={'#888'} />
            <Text style={styles.tabText}> {item.name}</Text>
        </TouchableOpacity>
    );
}


export default function CustomTabBar({ navigation }) {
    return (
        // <Shadow  style={styles.shadow}
        //     distance={1} // intensidade da sombra
        //     startColor={'#ffffff34'} // cor 
        //     offset={[0,'-30']} // posição x e y
        //     radius={12} // borda arredondada
        // >
            <View style={styles.container}>
                {TABS.map(tab => (
                    <TabItem key={tab.id} item={tab} navigation={navigation} />
                ))}

            </View>
        // </Shadow>
    )
}

const styles = StyleSheet.create({
    // shadow:{
    //     position:'absolute',
    //     bottom:0,
    //     left:10,
    //     right: 10,
    //     justifyContent:'center',
    //     alignItems: 'center',
    // },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 65,
        // height: 110,
        backgroundColor: '#0a0a0a',
        borderTopWidth: 1,
        borderTopColor: '#1c1c1c',
        paddingBottom: 5,

        position: 'absolute',
        // bottom:40,
        bottom: 40,
        left: 10,
        right: 10,
        zIndex: 1000,
        // paddingBottom:20

        borderRadius: 100,

        // SOMBRA

        // SOMBRA IOS

        // cor da sombra
        shadowColor: '#fff',
        // shadowColor: '#757474ff',

        // direção da sombra
        // width: 0 = não desloca laretalmente
        // height: 4 = deslocar para baixo
        shadowOffset: { width: 6, height: 4 },

        // transparencia da sombra 0 a 1
        shadowOpacity: 0.3,

        // quanto maior, mais borrada fica a sombra 
        shadowRadius: 4,


        // biblioteca para android 
        // npm install react-native-shadow-2

        //define a intencidade da sombra
        //quanto maior o valor, mais forte e mais distante
        elevation: 8

    },
    tabButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    },
    tabText: {
        fontSize: 10,
        color: '#888',
        marginTop: 4
    }
})