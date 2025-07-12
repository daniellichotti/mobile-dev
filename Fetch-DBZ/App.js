import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [characters, setCharacters] = useState({})
  const [loading, setLoading] = useState(false)
  const [idCount, setIdCount] = useState(1)

  const fetchDbz = async () => {
    setLoading(true)

    try {
      const res = await axios.get(`https://dragonball-api.com/api/characters/${idCount}`)
      setCharacters(res.data)
    } catch (e) {
      console.error('Erro na api', e)
    } finally {
      setLoading(false)
    }
  }

  function prevCharacter() {
    if (idCount === 1) {
      alert('Não há personagens anteriores')
    } else {
      setIdCount(idCount - 1)
    }
  }

  function nextCharacter() {
    setIdCount(idCount + 1)
  }

  useEffect(() => {
    fetchDbz()
  }, [idCount])

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#ddd" />
      ) : (
        <>
          <Text style={styles.info}>{characters.name}</Text>
          <Image style={styles.img} source={{ uri: characters.image }} resizeMode="contain" />
          <View>
            <Text>Ki: {characters.ki}</Text>
            <Text>Raça: {characters.race}</Text>
            <Text>Gênero: {characters.gender}</Text>
          </View>
        </>
      )}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={prevCharacter} disabled={idCount === 1 ? true : false}>
          <Text>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={nextCharacter}>
          <Text>Proximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9d0208',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 50
  },
  button: {
    backgroundColor: '#e85d04',
    padding: 10,
    borderRadius: 10
  },
  img: {
    height: 400,
    width: 200,
    borderRadius: 10,
  },
  image: {
    justifyContent: 'center',
  },
  info: {
    fontSize: 36,
    fontWeight: 'bold'
  }
});
