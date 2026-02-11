import { TouchableOpacity,View,StyleSheet, FlatList, Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
// import { FlatList } from 'react-native-gesture-handler';

const CATEGORIES = [
    {id:'1',name:'Ação', icon:'sword-cross'},
    {id:'2',name:'RPG', icon:'skull-outline'},
    {id:'3',name:'Indie', icon:'gamepad'},
    {id:'4',name:'Consoles', icon:'gamepad-variant'},
    {id:'5',name:'Acessórios', icon:'headphones'},
    {id:'6',name:'Geral', icon:'dots-horizontal'}
];

const CategoryItem = ({item}) => {
    return(
        <TouchableOpacity style={styles.itemCategory}>
            <View style={styles.iconCircle}>
               <MaterialCommunityIcons name={item.icon} size={28} color='#ff8c00'  />                        
            </View>
            <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
    );
}

export default function QuickCategories(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Categorias rápidas</Text>
            <FlatList
                data={CATEGORIES}
                renderItem={({item}) => <CategoryItem item={item} /> }
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
               
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 15
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:10
    },
    listContent:{
        paddingHorizontal:15
    },
    itemCategory:{
        alignItems:'center',
        marginRight:20
    },
    iconCircle:{
        width:60,
        height:60,
        borderRadius:100,
        backgroundColor:'#1c1c1c',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#444',
        marginBottom:5
    },
    itemText:{
        fontSize:12
    }

});