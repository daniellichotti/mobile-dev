import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

export function TelefoneScreen() {
  const route = useRoute()
  const navigation = useNavigation()

  const { phoneNumber } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Telefone: {phoneNumber}</Text>
      <Button title='Editar' onPress={() => navigation.goBack()} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  }
})