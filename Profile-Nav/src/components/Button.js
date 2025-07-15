import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function ButtonNav({ title, navigateTo }) {
  return (
    <TouchableOpacity style={styles.button} onPress={navigateTo}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 100,
    height: 50,
    backgroundColor: '#64748b',
  }
})