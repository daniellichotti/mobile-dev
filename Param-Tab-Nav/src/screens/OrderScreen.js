import { Button, StyleSheet, Text, View } from "react-native";

export function OrderScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Order</Text>
      <Button title="ir para detalhes" onPress={() => { navigation.navigate('Detalhes') }} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

