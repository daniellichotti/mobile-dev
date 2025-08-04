import axios from 'axios';
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function HomeScreen({ navigation }) {
  const [pokemon, setPokemon] = useState([])

  const fetchPokeApi = async () => {
    try {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon')
      setPokemon(res.data.results)
    } catch (e) {
      console.error('Erro na api', e)
    }
  }

  useEffect(() => {
    fetchPokeApi()
  }, [])



  return (
    <View style={styles.container}>
      <FlatList
        data={pokemon}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Lista', { url: item.url })}>
            <Text style={styles.text}>{item.name.toUpperCase()}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  item: {
    padding: 16,
    backgroundColor: '#eee',
    marginBottom: 8,
    borderRadius: 8
  },
  text: {
    fontSize: 18
  }
})