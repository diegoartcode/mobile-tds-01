import { View, Image, StyleSheet, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { ScrollView } from 'react-native-gesture-handler';

import HeaderBar from '../components/HeaderBar';

const BANNER_IMAGE = '../../assets/pastel_vegano.jpg';


export default function DetailsView({ navigation }) {
    return (
        <SafeAreaView>
            <HeaderBar navigation={navigation} />
            <ScrollView>
                <View style={styles.bannerContainer}>
                    <Image
                        source={require(BANNER_IMAGE)}
                        resizeMode='contain'
                        style={styles.bannerImagem}
                    />
                    <View style={styles.bannerOverlay}>
                        <Image
                        source={require('../../assets/icon.png')}
                        resizeMode='contain'
                        style={styles.gameLogo}
                        />
                        <View></View>
                        <View></View>
                    </View>
                </View>

                <Text style={styles.description}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</Text>


            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bannerContainer: {
        height: 220,
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius:10,
        overflow:'hidden'
    },
    bannerImagem: {
        width: '100%',
        height: '100%',
        position:'absolute'

    },
    gameLogo:{
            width:100,
            height:100,
            alignSelf:'flex-start'
    },
    bannerOverlay:{
        flex:1,
        padding:15,
        justifyContent:'space-between',
        alignItems:'flex-end'
    
    },
    description:{
        fontSize:14,
        lineHeight:20,
        paddingHorizontal:15,
        paddingVertical:20,
        borderBottomWidth:1,
        borderBottomColor:'#1c1c1c'
    }


})