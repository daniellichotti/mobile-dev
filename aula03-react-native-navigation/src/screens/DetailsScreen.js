import { Button, Text, View } from "react-native";

export function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: 'blue' }}>
      <Text>Esta é uma tela de detalhes!</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Button title="Ir para Contatos" onPress={() => navigation.navigate('Contatos')} />
    </View>
  )
};
