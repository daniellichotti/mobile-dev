import { useMemo, useState } from 'react';
import { Button, Text, View } from 'react-native';

function operacaoPesada(numero) {
  console.log('calculando...')
  return numero * 2
}

export function useMemo() {
  const [numero, setNumero] = useState(4)
  const [contar, setContar] = useState(0)

  const resultado = useMemo(() => operacaoPesada(numero), [numero])

  return (
    <View style={{ padding: 20 }}>
      <Text>resultado: {resultado}</Text>
      <Button title='Dobrar numero' onPress={() => setNumero(numero + 1)} />
      <Button title='somar contador' onPress={() => setContar(contar + 1)} />
      <Text>contador: {contar}</Text>
    </View>
  );
}