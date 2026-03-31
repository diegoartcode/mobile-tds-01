import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import CustomTabBar from '../components/CustomTabBar'; // Reutilizando a Tab Bar
import HeaderBar from '../components/HeaderBar'; // Reutilizando o Header Topo

// Componentes modulares novos (a serem definidos abaixo)
import ConsoleSelector from '../components/ConsoleSelector';
import SystemRequirements from '../components/SystemRequirements';
import ReviewsSection from '../components/ReviewsSection';

// Usando o mesmo background e imagem de banner
const background = require('../../assets/pastel_vegano.jpg');
const BANNER_IMAGE = require('../../assets/pastel_vegano.jpg');




// Componente da tela de detalhes
// Recebe:
// route -> parâmetros enviados pela navegação
// navigation -> controle de navegação
export default function DetailsView({ route, navigation }) {

    // Desestruturação para pegar o produto enviado da tela anterior
    const { id } = route.params;

    // Exibe o produto no console (debug)
    console.log(id)

    const [jogo, setJogo] = useState(null);
    const API_URL = `http://10.0.2.2:5203/api/Jogos/${id}`;

    const getJogo = async () => {
        try {
            const response = await fetch(API_URL);
            const json = await response.json();
            console.log("Jogo carregado: ", json)
            setJogo(json);
        }
        catch {
            console.log('teste1')
        }
    }

    useEffect(() => {
        getJogo();
    }, []);
    return (

        <SafeAreaView style={detailsStyles.safeArea}>

            {/* 1. Topo da Tela (Busca e Conta) */}
            <HeaderBar />

            <ScrollView style={detailsStyles.scrollViewContent}>

                {/* 2. Banner de Destaque e Nome do Jogo */}
                <View >
                    <View style={detailsStyles.bannerContainer}>
                        {jogo && (
                            <Image
                                source={{ uri: 'http://10.0.2.2:5203/assets/' + jogo.jogoCapa }}
                                style={detailsStyles.bannerImage}
                                resizeMode="cover"
                            />
                        )}

                        {/* Conteúdo sobreposto */}
                        <View style={detailsStyles.bannerOverlay}>
                            <Image
                                source={require('../../assets/icon.png')} // Logo menor
                                style={detailsStyles.gameLogo}
                                resizeMode="contain"
                            />
                            {/* Pontos do carrossel (Opcional nesta tela) */}
                            <View style={detailsStyles.dotsContainer}>
                                <View style={[detailsStyles.dot, detailsStyles.activeDot]} />
                                <View style={detailsStyles.dot} />
                            </View>
                        </View>
                    </View>
                </View>

                {/* 3. Seção de Avaliação e Wishlist */}
                <View style={detailsStyles.ratingHeader}>
                    <Text style={detailsStyles.ratingText}>★ 9.5/5</Text>
                    <TouchableOpacity style={detailsStyles.wishlistButton}>

                        <MaterialCommunityIcons name="heart" size={20} color="#FFF" />
                        <Text style={detailsStyles.wishlistText}>Lista de desejos</Text>
                    </TouchableOpacity>
                </View>

                {/* 4. Seleção de Plataformas e Preço */}
                <View style={detailsStyles.platformPriceContainer}>
                    <ConsoleSelector /> {/* Componente com PS5, XBOX, PC */}

                    <View style={detailsStyles.priceBox}>
                        <TouchableOpacity style={detailsStyles.buyButton}>
                            <MaterialCommunityIcons name="cart" size={20} color="#000" />
                            <Text style={detailsStyles.buyButtonText}>Pré-Venda Digital</Text>
                        </TouchableOpacity>

                        <Text style={detailsStyles.priceText}> R$ {jogo?.jogoPreco}</Text>

                    </View>
                </View>
                <Text style={detailsStyles.titleGame}> {jogo?.jogoNome}</Text>

                {/* 5. Descrição do Jogo */}
                <Text style={detailsStyles.description}>
                    {jogo?.jogoDescricao}


                </Text>

                {/* 6. Requisitos de Sistema */}
                <SystemRequirements />


                {/* 7. Avaliações e Notas */}
                <ReviewsSection />

                {/* Espaço para ScrollView */}
                <View style={{ height: 20 }} />
            </ScrollView>

            {/* 8. Barra de Navegação Inferior */}
            <CustomTabBar />

        </SafeAreaView>

    );
};

const detailsStyles = StyleSheet.create({
    // Estilos comuns

    safeArea: { flex: 1, backgroundColor: '#32343a', paddingBottom: 100 },
    scrollViewContent: { flex: 1 },

    // 2. Banner
    bannerContainer: { height: 220, marginHorizontal: 15, marginTop: 10, borderRadius: 10, overflow: 'hidden' },
    bannerImage: { width: '100%', height: '100%', position: 'absolute' },
    bannerOverlay: { flex: 1, padding: 15, justifyContent: 'space-between', alignItems: 'flex-end' },
    gameLogo: { width: 90, height: 60, alignSelf: 'flex-start' }, // Logo no canto superior esquerdo
    dotsContainer: { flexDirection: 'row', position: 'absolute', bottom: 10, left: 15 },
    dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#888', marginHorizontal: 4 },
    activeDot: { backgroundColor: '#FFF' },

    // 3. Avaliação e Wishlist
    ratingHeader: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 10, marginBottom: 15 },
    ratingText: { fontSize: 16, fontWeight: 'bold', color: '#FFD700' }, // Estrelas douradas
    wishlistButton: { flexDirection: 'row', alignItems: 'center' },
    wishlistText: { color: '#FFF', marginLeft: 5 },

    // 4. Seleção de Plataformas e Preço
    platformPriceContainer: {
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#1c1c1c',
        paddingBottom: 20,
    },
    priceBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    buyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF8C00', // Laranja Cyberpunk
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        // Brilho Neon
        shadowColor: '#FF8C00',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
    },
    buyButtonText: {
        color: '#000',
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: 16,
    },
    priceText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },

    titleGame: {
        color: '#FFF',
        fontSize: 20,
        lineHeight: 20,
        paddingHorizontal: 15,
        paddingVertical: 20,

    },

    // 5. Descrição
    description: {
        color: '#FFF',
        fontSize: 14,
        lineHeight: 20,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#1c1c1c',
    },
});

// ... Definição de Estilos principais (detailsStyles)
