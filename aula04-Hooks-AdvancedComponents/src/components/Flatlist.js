import { FlatList, Text } from 'react-native';

const dados = [
  { id: '1', nome: 'arroz' },
  { id: '2', nome: 'feijao' },
  { id: '3', nome: 'macarrão' },
  { id: '4', nome: 'macarrão' },
  { id: '5', nome: 'macarrão' },
  { id: '6', nome: 'macarrão' },
  { id: '7', nome: 'macarrão' },
  { id: '8', nome: 'macarrão' },
  { id: '9', nome: 'macarrão' },
]

export function FlatList() {

  return (
    <FlatList
      style={{ marginTop: 50 }}
      data={dados}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Text style={{ borderColor: 'orange', borderWidth: 3, textAlign: 'center', backgroundColor: '#ddd', height: 100, width: 100, borderRadius: 100, padding: 10, marginHorizontal: 10 }}>{item.nome}</Text>
      )}
    />
  );
}