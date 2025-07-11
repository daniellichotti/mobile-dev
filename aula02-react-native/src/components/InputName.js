import { useState } from "react";
import { Button, StyleSheet, Text, TextInput } from "react-native";

export function InputName({ placeholder, textColor }) {
  const [nome, setNome] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <TextInput
        style={[styles.input, { color: textColor }]}
        placeholder={placeholder}
        placeholderTextColor="#ddd"
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Definir nome" onPress={() => setMessage(nome)} />
      <Text>Olá, {message}</Text>
    </>
  )
};

const styles = StyleSheet.create({
  input: {
    shadowColor: '#ddd',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 10,
    borderRadius: 10,
    width: 200,
    padding: 10,
    color: 'green',
  }
})