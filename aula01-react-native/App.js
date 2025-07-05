import { SafeAreaView, ScrollView } from 'react-native';
import { Avatar } from './components/Avatar';

export default function App() {
  /*
  Crie um componente novo chamado Avatar.js. Ele deve receber por props:
  nome
  imagem (URL de uma imagem)
  O componente deve mostrar a imagem e abaixo o nome do usuário.
  */


  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 40, paddingHorizontal: 10 }}>
      <ScrollView>
        <Avatar name='Bandolero' urlImg='https://randomuser.me/api/portraits/lego/6.jpg' />
        <Avatar name='Jack Chan' urlImg='https://randomuser.me/api/portraits/lego/8.jpg' />
        <Avatar name='Lucas' urlImg='https://randomuser.me/api/portraits/lego/8.jpg' />
        <Avatar name='Moisés' urlImg='https://randomuser.me/api/portraits/lego/3.jpg' />
        <Avatar name='Moisés' urlImg='https://randomuser.me/api/portraits/lego/3.jpg' />
        <Avatar name='Moisés' urlImg='https://randomuser.me/api/portraits/lego/3.jpg' />
        <Avatar name='Moisés' urlImg='https://randomuser.me/api/portraits/lego/3.jpg' />
        <Avatar name='Moisés' urlImg='https://randomuser.me/api/portraits/lego/3.jpg' />
        <Avatar name='Moisés' urlImg='https://randomuser.me/api/portraits/lego/3.jpg' />
        <Avatar name='Moisés' urlImg='https://randomuser.me/api/portraits/lego/3.jpg' />
        <Avatar name='Moisés' urlImg='https://randomuser.me/api/portraits/lego/3.jpg' />
      </ScrollView>
    </SafeAreaView>

  );
}
