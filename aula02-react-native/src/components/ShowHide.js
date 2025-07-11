import { useState } from "react";
import { Button, Text } from "react-native";

/*
Botão que alterna entre "Mostrar" e "Ocultar"
Crie um botão que alterna um texto visível/invisível com base em um estado booleano.
display: 'none'
*/

export function ShowHide() {
  const [visible, setVisible] = useState(true)

  return (
    <>
      <Button
        title={visible ? 'Visível' : 'Invisível'}
        onPress={() => setVisible(!visible)}
      />
      {
        !visible ? <Text>Texto 1 visível</Text> : visible
      }
      <Text style={visible ? { display: 'flex' } : { display: 'none' }}>Texto 2 visível</Text>
    </>
  )
};
