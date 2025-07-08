import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Header } from './src/components/Header';
import { UserList } from './src/components/UserList';

export default function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://randomuser.me/api/?results=10')
      setUsers(response.data.results)
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
      <Button color='#2196F3' disabled={loading} title='Buscar Novos Usuários' onPress={fetchUsers} />

      {loading ? <ActivityIndicator color='#2196F3' size='large' /> : <UserList users={users} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10
  },
});
