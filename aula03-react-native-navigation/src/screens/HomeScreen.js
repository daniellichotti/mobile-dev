import { Button, Text, View } from "react-native";

export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: 'red' }}>
      <Text>Bem-vindo à tela inicial!</Text>
      <Button title="Ir para Detalhes" onPress={() => navigation.navigate('Detalhes')} />
      <Button title="Ir para Contatos" onPress={() => navigation.navigate('Contatos')} />
    </View>
  )
};
