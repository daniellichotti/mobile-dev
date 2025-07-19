import { useRef } from 'react';
import { Button, TextInput, View } from 'react-native';

export function useRef() {
  const inputRef = useRef(null)

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        ref={inputRef}
        placeholder='Digite algo'
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title='Foco no input' onPress={() => { inputRef.current.focus() }} />
    </View>
  );
}