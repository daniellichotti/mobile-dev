import { Button, StyleSheet, Text, View } from "react-native";

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="ir para detalhes" onPress={() => { navigation.navigate('Detalhes') }} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

