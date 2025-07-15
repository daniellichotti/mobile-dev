import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AboutScreen } from './src/screens/AboutScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';

/*
Crie um app com 3 telas:
Tela Inicial com botão para a Tela de Perfil
Tela de Perfil com botão para a Tela de Sobre
Tela de Sobre com botão para voltar à Tela Inicial
Dica: use navigation.navigate() e navigation.goBack().
*/

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen name='Inicio' component={HomeScreen} />
        <Stack.Screen name='Perfil' component={ProfileScreen} />
        <Stack.Screen name='Sobre' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}