import { useEffect, useState } from 'react';

import { Button, ImageBackground, Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from '../components/HeaderBar';
import CustomTabBar from '../components/CustomTabBar';
import QuickCategories from '../components/QuickCategories';
import GameList from '../components/GameList';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from './Carousel';

export default function HomeView({ navigation }) {

  // const [games, setGames] = useState(null);

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products/20')
  //     .then(res => res.json())
  //     .then(json => {
  //       console.log(json);
  //       setGames(json); // salva o produto inteiro
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  return (




    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderBar navigation={navigation} />

        <Carousel />
        <QuickCategories />

        <GameList title='Ofertas top da semana' isVertical={false} navigation={navigation} />
        <GameList title='Recomendados para você' isVertical={false} navigation={navigation} />
        {/* <Text style={styles.texto}> {games?.title}</Text> */}

        {/* 
        games && product.title
        ou ainda:
        if (games != null) {
               return product.title
            }
        Por que isso é útil?
        Sem o ?., se product for undefined ou null, o React Native vai gerar um erro:
        Cannot read property 'title' of undefined 
        */}

        {/* <Text style={styles.texto}> {games?.category}</Text>
        <Text style={styles.texto}> R${games?.price}</Text>
        <Text style={styles.texto}> {games?.description}</Text> */}
        {/* <Text>{product.price}</Text>
           <Text>{product.description}</Text> */}

        <GameList title='Recomendados para você' isVertical={false} navigation={navigation} />

      </ScrollView>
      <CustomTabBar navigation={navigation} />

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#32343a',
    flex: 1,
    paddingBottom: 100
  },
  texto: {
    color: '#fff'
  }
})
