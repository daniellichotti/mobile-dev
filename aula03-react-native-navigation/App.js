import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactScreen } from './src/screens/ContactScreen';
import { DetailsScreen } from './src/screens/DetailsScreen';
import { HomeScreen } from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen name='Início' component={HomeScreen} />
        <Stack.Screen name='Detalhes' component={DetailsScreen} />
        <Stack.Screen name='Contatos' component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}