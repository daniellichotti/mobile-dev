import { Text, View } from "react-native";

export function Cartao({ title, description }) {
  return (
    <View style={{ margin: 30, marginTop: 30, borderColor: '#ddd', borderWidth: 1, borderRadius: 8, padding: 50 }}>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  )
};