import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Mock Data para as avaliações (reutilizando itens da tela inicial)
const REVIEWS_MOCK = [
    { id: '1', title: 'Mortal kombat', score: '4.69', subtitle: 'Jogo incrível! Gráficos Sonda te fluifs envolvete.', image: require('../../assets/icon.png') },

    { id: '2', title: "Tekken 8", score: '4.65', subtitle: 'STARFALL TALES', image: require('../../assets/icon.png') },
    { id: '3', title: 'Neon shadon', score: '4.71', subtitle: 'LORE FANTASY', image: require('../../assets/icon.png') },
    { id: '4', title: 'Spyro', score: '4.69', subtitle: 'Jogo incrível! Gráficos Sonda te fluifs envolvete.', image: require('../../assets/icon.png') },
];

const ReviewItem = ({ item }) => (
    <View style={reviewStyles.itemContainer}>
        <Image source={item.image} style={reviewStyles.reviewImage} />
        <View style={reviewStyles.scoreBadge}>
            <Text style={reviewStyles.scoreText}>{item.score}</Text>
        </View>
        <Text style={reviewStyles.titleText}>{item.title}</Text>
        <Text style={reviewStyles.subtitleText} numberOfLines={2}>{item.subtitle}</Text>
        <View style={reviewStyles.starsContainer}>
            {/* Renderiza 4 ou 5 estrelas */}
            {[...Array(5)].map((_, i) => (
                <AntDesign key={i} name="star" size={10} color={i < 4 ? '#FFD700' : '#444'} />
            ))}
        </View>
    </View>
);

const ReviewsSection = () => (
    <View style={reviewStyles.container}>
        <Text style={reviewStyles.title}>Avaliações e Notas</Text>
        <FlatList
            data={REVIEWS_MOCK}
            renderItem={({ item }) => <ReviewItem item={item} />}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={reviewStyles.listContent}
        />
    </View>
);

const reviewStyles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
        marginLeft: 15,
        marginBottom: 10,
    },
    listContent: {
        paddingHorizontal: 15,
    },
    itemContainer: {
        width: 100, // Largura para os itens horizontais
        marginRight: 15,
        alignItems: 'flex-start',
    },
    reviewImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 5,
    },
    scoreBadge: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: '#4CAF50', // Verde para a nota
        borderRadius: 5,
        paddingHorizontal: 4,
        paddingVertical: 2,
    },
    scoreText: {
        color: '#FFF',
        fontSize: 10,
        fontWeight: 'bold',
    },
    titleText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5,
    },
    subtitleText: {
        color: '#888',
        fontSize: 10,
        marginBottom: 3,
    },
    starsContainer: {
        flexDirection: 'row',
    }
});

export default ReviewsSection;