import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    carregarProdutos()
  }, [])

  const carregarProdutos = async () => {
    const data = await AsyncStorage.getItem('produtos');
    if (data) {
      setProdutos(JSON.parse(data))
    }
  }

  const salvarProduto = async () => {
    if (!nome || !preco) return;

    const novoProduto = {
      id: Date.now(),
      nome,
      preco: parseFloat(preco)
    };

    const novaLista = [...produtos, novoProduto]
    await AsyncStorage.setItem('produtos', JSON.stringify(novaLista));
    setProdutos(novaLista)
    setNome('')
    setPreco('')
  }

  const limparTudo = async () => {
    await AsyncStorage.removeItem('produtos');
    setProdutos([])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Produtos</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome do produto'
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder='Preço do produto'
        value={preco}
        onChangeText={setPreco}
      />
      <Button title='Salvar Produto' onPress={salvarProduto} />
      <FlatList
        style={{ marginTop: 20 }}
        data={produtos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ textAlign: 'center', marginTop: 10, borderBottomColor: '#ddd', borderBottomWidth: 1 }}>🛒 {item.nome} - R${item.preco.toFixed(2)}</Text>
        )}
      />
      <View>
        <Button title='Limpar Produtos' color='red' onPress={limparTudo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 32
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 6
  }
});
