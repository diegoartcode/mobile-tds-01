import { TouchableOpacity, Image, View, FlatList, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const GAMES = [
    { id: '1', title: 'The Last Guardian', price: 'R$199', discount: '10%', rating: 4.5, image: require('../../assets/icon.png') },
    { id: '2', title: 'Galactic Odyssey', price: 'R$199', image: require('../../assets/icon.png') },
    { id: '3', title: 'Costroms', price: 'R$199', discount: '10%',rating: 5, image: require('../../assets/icon.png') },
    { id: '4', title: 'Orbital Froniter', price: 'R$199', image: require('../../assets/icon.png') }
];

const GameItem = ({ item,navigation }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('DetailsView')}>
            <Image source={item.image} style={styles.gameImage} />

            {item.discount && (
                <View style={styles.discountContainer}>
                    <Text style={styles.discountText}>{item.discount}</Text>
                </View>

            )}



            <View style={styles.gamePriceContainer}>
                <Text style={styles.gamePriceText}>{item.price}</Text>
            </View>
            <Text style={styles.gameTitle}>{item.title}</Text>

            {item.rating && (
                <View style={styles.ratingContainer}>
                    {Array(Math.round(item.rating)).fill(0).map((_, i) => (
                    <AntDesign key={i} name='star' size={12} color="#ffd700" />
                    ))}
                    <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
            )}

        </TouchableOpacity>
    );
}

export default function GameList({ title,navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={GAMES}
                renderItem={({ item }) => <GameItem item={item} navigation={navigation} />}
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
        marginBottom:30
    },
    itemContainer: {
        width: 120,
        marginRight: 15
    },
    gameImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 5
    },
    gamePriceContainer: {
        alignItems: 'center',
    },
    gamePriceText: {
        color: '#ffa500',
        fontSize: 14,
        fontWeight: 'bold'
    },
    gameTitle: {
        color: '#fff',
        fontSize: 12,
        marginBottom: 3,
        textAlign: 'center'
    },
    listContent: {
        paddingHorizontal: 15,
    },
    discountContainer: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: '#9370db',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,
        zIndex: 10
    },
    discountText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold'
    },
    ratingContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    ratingText:{
        color:'#fff',
        fontStyle: 12,
        paddingLeft: 10
    },
    title:{
        fontSize: 18,
        fontWeight:'bold',
        color:'#fff',
        marginLeft:15,
        marginBottom:10
    }

})