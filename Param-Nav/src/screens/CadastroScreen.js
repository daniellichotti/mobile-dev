import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleEnviar = () => {
    if (nome && email) {
      navigation.navigate('Resumo', { nome, email })
    } else {
      alert('Preencha todos os campos!')
    }
  }

  const handleEnviarTelefone = () => {
    if (phoneNumber) {
      navigation.navigate('Telefone', { phoneNumber })
    } else {
      alert('Preencha todos os campos!')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />
      <Button title="Enviar" onPress={handleEnviar} />
      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Digite seu telefone"
        keyboardType="number-pad"
      />
      <Button title="Enviar Telefone" onPress={handleEnviarTelefone} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center'
  },
  label: {
    marginTop: 10,
    fontSize: 16
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5
  }
})
