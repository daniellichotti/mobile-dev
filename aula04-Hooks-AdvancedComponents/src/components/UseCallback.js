import { useCallback, useState } from 'react';
import { Button, Text, View } from 'react-native';

export function UseCallback() {
  const [contador, setContador] = useState(0)

  const incrementar = useCallback(() => {
    setContador((prev) => prev + 1)
  }, [])

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ padding: 24 }}>{contador}</Text>
      <Button title='Somar' onPress={incrementar} />
    </View>
  );
}