import { StyleSheet, Text, View } from "react-native";
import { ButtonNav } from "../components/Button";

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Bem vindo, clique para conhecer meu perfil</Text>
      <ButtonNav title='Profile' navigateTo={() => navigation.navigate('Perfil')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e8f0',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
})