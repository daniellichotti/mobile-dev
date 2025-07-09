import { Image, StyleSheet, Text, View } from 'react-native';

/*
Tela de Perfil
Crie uma tela com:
Uma imagem de perfil (pode ser quadrado colorido)
Um nome centralizado
Uma breve descrição abaixo
Tudo centralizado na tela com justifyContent e alignItems
*/

export function ExercicioUm() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://randomuser.me/api/portraits/lego/6.jpg' }}
      />
      <Text style={styles.name}>El Bandolero</Text>
      <Text style={styles.bio}>Adoro a simplicidade dos momentos compartilhados e estou sempre em busca de novas conexões e amizades.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 5,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20
  },
  bio: {
    fontSize: 20,
    textAlign: 'center'
  }
});
