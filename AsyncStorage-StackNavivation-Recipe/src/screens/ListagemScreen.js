import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";


export function ListagemScreen({ navigation }) {
  const [receitas, setReceitas] = useState([])

  useEffect(() => {
    carregarReceitas()
  }, [receitas])

  const carregarReceitas = async () => {
    try {
      const dados = await AsyncStorage.getItem('receitas')
      const lista = dados ? JSON.parse(dados) : []
      setReceitas(lista)
    } catch (error) {
      console.error('Erro ao carregar: ', error)
    }
  }

  const limparTudo = async () => {
    await AsyncStorage.removeItem('receitas');
    setReceitas([])
  }


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Lista de Receitas:</Text>
      <FlatList
        data={receitas}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>{item.descricao}</Text>
          </View>
        )}
      />

      <View style={{ gap: 10 }}>
        <Button title="Voltar" onPress={() => { navigation.goBack() }} />
        <Button title='Limpar Produtos' color='red' onPress={limparTudo} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
    paddingHorizontal: 20
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 6
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  card: {
    backgroundColor: '#ddd',
    padding: 15,
    marginBottom: 12,
    borderRadius: 8
  }
});