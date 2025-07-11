import { useState } from "react";
import { Button, Text, TextInput } from "react-native";
/*
Formulário simples
Crie dois TextInput (nome e idade) e um botão que exibe as informações digitadas abaixo quando clicado.
*/


export function SimpleForm() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [mensagem, setMensagem] = useState('')

  return (
    <>
      <TextInput
        placeholder="Digite seu nome"
        placeholderTextColor="#ddd"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Digite sua idade"
        placeholderTextColor="#ddd"
        value={idade}
        onChangeText={setIdade}
      />
      <Button title="Definir nome" onPress={() => setMensagem(nome + ', ' + idade)} />
      <Text>{mensagem}</Text>
    </>
  )
};
