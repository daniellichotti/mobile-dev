import { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';

export function Modal() {
  const [visivel, setVisivel] = useState(false)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Modal visible={visivel} transparent={true} animationType='fade'>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ borderWidth: 1, borderColor: 'red', backgroundColor: 'white', padding: 20, width: '100' }}>
            <Text>Esse é um Modal!</Text>
            <Button
              title='Fechar'
              onPress={() => setVisivel(false)}
            />
          </View>
        </View>
      </Modal>
      <Button
        title='Abrir Modal'
        onPress={() => setVisivel(true)}
      />
    </View>
  );
}