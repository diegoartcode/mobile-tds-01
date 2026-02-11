import { Button, ImageBackground, Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from '../components/HeaderBar';
import CustomTabBar from '../components/CustomTabBar';
import QuickCategories from '../components/QuickCategories';
import GameList from '../components/GameList';
import { ScrollView } from 'react-native-gesture-handler';



export default function HomeView({ navigation }) {
  return (


    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderBar navigation={navigation} />

        <QuickCategories />

        <GameList title='Ofertas top da semana' isVertical={false} />
        <GameList title='Recomendados para você' isVertical={false} />
        <GameList title='Recomendados para você' isVertical={false} />
       
      </ScrollView>
      <CustomTabBar navigation={navigation} />

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#32343a',
    flex: 1
  }
})
