import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { ListScreen } from './screens/ListScreen';

/*
Crie uma aplicação React chamada Pokédex, que faz o seguinte:
Ao abrir a aplicação, ela deve iniciar em uma tela que busque os dados dos Pokémons da API https://pokeapi.co/api/v2/pokemon e mostre em uma lista.

Ao clicar em um Pokemon ir para uma segunda tela e exibir:
Nome
ID
Imagem
Altura
Peso
*/

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lista" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
