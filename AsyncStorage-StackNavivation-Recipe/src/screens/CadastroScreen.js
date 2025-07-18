import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')

  const salvarReceita = async () => {
    if (!nome || !descricao) {
      alert('Preencha todos os campos!')
      return
    }

    try {
      const receita = { nome, descricao }
      const dados = await AsyncStorage.getItem('receitas')
      const receitas = dados ? JSON.parse(dados) : []
      receitas.push(receita)
      await AsyncStorage.setItem('receitas', JSON.stringify(receitas))
      setNome('')
      setDescricao('')
      navigation.navigate('Listagem')
    } catch (error) {
      console.error('Erro ao salvar:', error)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Cadastro</Text>
      <TextInput
        placeholder="Nome da receita"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Descrição da receita"
        value={descricao}
        onChangeText={setDescricao}
        style={styles.input}
      />
      <Button title="Listagem" onPress={salvarReceita} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 6
  }
});
