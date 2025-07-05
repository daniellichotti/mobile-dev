import { StyleSheet, Text, View } from "react-native";

export function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2196F3',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  text: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold'
  }
})
