
/*
Componente Card
Crie um componente Card que receba:
titulo (string)
descricao (string)
corDeFundo (string)
*/

import { StyleSheet, Text, View } from "react-native";

export function Card({ title, description, backgroundColor, children }) {
  return (
    <View style={{ backgroundColor: backgroundColor, width: 200, borderRadius: 20, padding: 10, margin: 10 }}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{description}</Text>
      {children}
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center'
  }
})