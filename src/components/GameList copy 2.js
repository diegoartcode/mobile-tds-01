import { useEffect, useState } from 'react';
import { TouchableOpacity, Image, View, FlatList, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const GameItem = ({ item, navigation }) => {
    return (
        <TouchableOpacity 
            style={styles.itemContainer} 
            onPress={() => navigation.navigate('DetailsView', { product: item })}
        >
            <Image source={{ uri: item.image }} style={styles.gameImage} />

            <View style={styles.gamePriceContainer}>
                <Text style={styles.gamePriceText}>
                    R$ {item.price}
                    id {item.id}
                </Text>
            </View>

            <Text style={styles.gameTitle} numberOfLines={2}>
                {item.title}
            </Text>

            {item.rating && (
                <View style={styles.ratingContainer}>
                    {Array(Math.round(item.rating.rate)).fill(0).map((_, i) => (
                        <AntDesign key={i} name='star' size={12} color="#ffd700" />
                    ))}
                    <Text style={styles.ratingText}>
                        {item.rating.rate}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
}

export default function GameList({ title, navigation }) {

      // Estado que armazena os produtos
    const [games, setGames] = useState([]);
    // useEffect executa quando o componente é montado
    // O [] significa que executa apenas UMA VEZ
    useEffect(() => {
        // Faz requisição para API fake
        fetch('https://fakestoreapi.com/products')
            // Converte resposta para JSON
            .then(res => res.json())
            // Recebe os dados convertidos
            .then(json => {
                // Atualiza o estado com os produtos
                setGames(json);            })

            // Se der erro, mostra no console
            .catch(error => console.error(error));

    }, []); // array vazio = roda só uma vez
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <FlatList
                data={games}
                renderItem={({ item }) => (
                    <GameItem item={item} navigation={navigation} />
                )}
                keyExtractor={item => item.id.toString()}
                horizontal
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