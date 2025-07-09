import { StyleSheet, Text, View } from "react-native";
import { Card } from "./src/components/Card";



export default function App() {
  return (
    <View style={styles.container}>
      <Card title='Fazer compras' description='Comprar carnes' backgroundColor='red'>
        <Text>Sou um children do card</Text>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})