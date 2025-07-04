import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export function Lantern() {
  const [bgChange, setBgChange] = useState('light')


  function changeColor() {
    if (bgChange === 'light') {
      setBgChange('dark')
    } else {
      setBgChange('light')
    }
  }

  return (
    <View style={bgChange === 'light' ? stylesLight.container : stylesDark.container}>
      <TouchableOpacity style={stylesLight.button} onPress={changeColor} />
    </View>
  );
}

const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 100
  },
  text: {
    fontSize: 60,
  },
  button: {
    backgroundColor: 'yellow',
    borderRadius: 100,
    height: 100,
    width: 100
  },
});

const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 100
  },
  text: {
    fontSize: 60,
  }
});
