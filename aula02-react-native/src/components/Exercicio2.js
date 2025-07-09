import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

/*
Tela com Lista Rolável
Crie uma tela com:
Um título no topo
10 quadrados com textos “Item 1”, “Item 2”... “Item 10”
Use ScrollView para permitir rolagem
*/

export function ExercicioDois() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compras:</Text>
      <ScrollView style={styles.scroll}>
        <Text style={styles.item}>Arroz</Text>
        <Text style={styles.item}>Feijão</Text>
        <Text style={styles.item}>Carne</Text>
        <Text style={styles.item}>Alface</Text>
        <Text style={styles.item}>Pão</Text>
        <Text style={styles.item}>Manteiga</Text>
        <Text style={styles.item}>Requeijão</Text>
        <Text style={styles.item}>Mussarela</Text>
        <Text style={styles.item}>Frango</Text>
        <Text style={styles.item}>Coca-cola</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ddd',
    paddingTop: 20,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    marginBottom: Platform.OS === 'android' ? 0 : 0,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    margin: 20,
  },
  scroll: {
    width: '100%',
    paddingHorizontal: 10
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 10,
    width: '100%',
    height: 80,
    fontSize: 30,
    textAlign: 'center'
  }
});
