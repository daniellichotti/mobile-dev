import { ScrollView } from 'react-native';
import { Cartao } from './components/Cartao';

export default function App() {
  /*
  Crie um componente novo chamado Avatar.js. Ele deve receber por props:
  nome
  imagem (URL de uma imagem)
  O componente deve mostrar a imagem e abaixo o nome do usuário.
  */


  return (
    <ScrollView style={{ marginTop: 50 }}>
      <Cartao title="Primeiro" description="Esse é meu primeiro card" />
      <Cartao title="Segundo" description="Esse é meu segundo card" />
      <Cartao title="Terceiro" description="Esse é meu terceiro card" />
    </ScrollView>

  );
}
