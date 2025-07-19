import { useState } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';

export function TouchableAndPressable() {
  const [cont, setCont] = useState(0)

  const modoDesenvolvedor = () => {
    switch (cont) {
      case 1:
        alert(cont)
        setCont(cont + 1)
        break
      case 2:
        alert(cont)
        setCont(cont + 1)
        break
      case 3:
        alert(cont)
        setCont(1)
        break
      default:
        setCont(cont + 1)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={{ backgroundColor: 'blue', height: 100, width: 100, borderRadius: 100 }} onPress={modoDesenvolvedor} >
        <Text>Clique aqui</Text>
      </TouchableOpacity>

      <Pressable style={{ backgroundColor: 'red', height: 100, width: 100, borderRadius: 100, marginTop: 30 }} onPress={() => { alert('clicou rapido') }} onLongPress={() => { alert('clicou por um tempo longo') }}>
        <Text>Clique aqui</Text>
      </Pressable>
    </View>
  );
}