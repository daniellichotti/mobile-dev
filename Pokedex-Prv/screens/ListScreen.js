import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export function ListScreen({ route }) {
  const { url } = route.params

  const [pokemon, setPokemon] = useState({})

  const fetchPokeApi = async () => {
    try {
      const res = await axios.get(url)
      setPokemon(res.data)
    } catch (e) {
      console.error('Erro na api', e)
    }
  }

  useEffect(() => {
    fetchPokeApi()
  }, [])

  if (!pokemon) {
    return (
      <View>
        <ActivityIndicator size='large' color="#ff0000" />
      </View>
    )
  }
  //<Image
  //source={{ uri: pokemon.sprites.front_default }}
  //style={{ width: 150, height: 150 }}
  //>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pokemon.name}</Text>

      <Text style={styles.info}>{pokemon.id}</Text>
      <Text style={styles.info}>{pokemon.height}</Text>
      <Text style={styles.info}>{pokemon.weight}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 32
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  info: { fontSize: 18 }
})