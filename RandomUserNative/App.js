import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, SafeAreaView, StyleSheet } from 'react-native';
import { Header } from './src/components/Header';

export default function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://randomuser.me/api/?results=10')
      setUsers(response.data.results)
      console.log(users)
    } catch (error) {
      console.error('Erro ao buscar usuários:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Random Users" />
      <Button color='#2196F3' disabled={loading === true ? true : false} title='Buscar Novos Usuários' onPress={fetchUsers} />
      <ActivityIndicator color='#2196F3' size='large' />

      {

        //<UserList />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10
  },
});
