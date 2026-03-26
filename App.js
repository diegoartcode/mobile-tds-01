import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppRoutes from './src/routes/AppRoutes';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';

// import MyCarousel from './src/views/MyCarousel';
// import MyCarousel2 from './src/views/MyCarousel2';


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppRoutes />
    
        {/* <MyCarousel/> */}
        {/* <MyCarousel2/> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
