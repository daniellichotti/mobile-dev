import { StyleSheet, Text, View } from "react-native";

export function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Detalhes</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

