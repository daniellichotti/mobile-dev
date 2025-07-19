import { useState } from 'react';
import { Button, FlatList, KeyboardAvoidingView, Modal, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

/*
Crie uma tela com os seguintes requisitos:
Uma FlatList com 10 itens de uma lista de compras
Um botão com TouchableOpacity que abre um Modal
Dentro do modal, permita digitar um novo item (com KeyboardAvoidingView)
Use SafeAreaView para proteger o conteúdo
*/

export default function App() {
  const [itens, setItens] = useState(['Arroz', 'Feijao', 'Carne'])
  const [modalVisible, setModalVisible] = useState(false)
  const [novoItem, setNovoItem] = useState('')

  const adicionarItem = () => {
    setItens([...itens, novoItem])
    setNovoItem('')
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={itens}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={{ padding: 8 }}>{item}</Text>
        )}
      />

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{ backgroundColor: '#28a745', padding: 12, borderRadius: 8, marginTop: 16 }}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>Adicionar Item</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType='fade'
        transparent
      >
        <KeyboardAvoidingView
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}
        >
          <View style={{ backgroundColor: '#fff', padding: 24, width: '80%', borderRadius: 10, gap: 8 }}>
            <Text>Novo item: </Text>
            <TextInput
              placeholder='Digite aqui'
              value={novoItem}
              onChangeText={setNovoItem}
              style={{ borderWidth: 1, padding: 8, borderRadius: 8, marginBottom: 12 }}
            />
            <Button title='Adicionar' onPress={adicionarItem} />
            <Button title='Cancelar' color='red' onPress={() => setModalVisible(false)} />
          </View>

        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}