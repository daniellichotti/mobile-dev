import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CadastroScreen } from './src/screens/CadastroScreen';
import { ListagemScreen } from './src/screens/ListagemScreen';

/*
Criar um app com duas telas onde o usuário pode:
Cadastrar uma receita (nome + descrição).
Visualizar a lista de receitas cadastradas.
Armazenar os dados localmente com AsyncStorage.
*/

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Listagem" component={ListagemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


