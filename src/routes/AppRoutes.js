import { createStackNavigator } from "@react-navigation/stack";

import HomeView from "../views/HomeView";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import ForgotPassView from "../views/ForgotPassView";
import ProfileView from "../views/ProfileView";
import DetailsView from "../views/DetailsView";
import HelpSupportView from "../views/HelpSupportView";


const Stack = createStackNavigator();

export default function AppRoutes(){

    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor:'#464646ff'
                },
                headerTintColor: '#fff',
                headerTitleStyle:{
                    fontWeight:'bold'
                }
            }}
        >
            {/* <Stack.Screen name="Home" component={HomeView} options={{title:'Minha home' }} />                */}
            <Stack.Screen name="Home" component={HomeView} options={{headerShown: false}} />              
            <Stack.Screen name="Login" component={LoginView} options={{title:'Meu Login' }} />  
            <Stack.Screen name="Register" component={RegisterView} options={{title:'Meu login' }} />  
            <Stack.Screen name="ForgotPass" component={ForgotPassView} options={{title:'Meu Login' }} />  
            <Stack.Screen name="ProfileView" component={ProfileView} options={{title:'Meu Perfil' }} />  
            <Stack.Screen name="DetailsView" component={DetailsView} options={{headerShown: false}} />  
            <Stack.Screen name="HelpSupportView" component={HelpSupportView} options={{headerShown: false}} />  
        </Stack.Navigator>
    )
}

