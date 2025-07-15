import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function ContactScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: 'yellow' }}>
      <Text>Nosso contato:</Text>
      <Text>9999999</Text>
      <Text>@instagram</Text>
      <Text>@fb</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text>Ir para Detalhes</Text>
      </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e85d04',
    padding: 10,
    borderRadius: 10
  },
})