/*
LikeButton
Crie um componente LikeButton com um botão "Curtir" que muda o texto com useState entre:
👍 Você curtiu isso!
👎 Você ainda não curtiu.
*/

import { useState } from "react";
import { Button, Text } from "react-native";

export function LikeButton() {
  const [curtiu, setCurtiu] = useState(false)

  return (
    <>
      <Button
        title={curtiu ? 'Curtido' : 'Curtir'}
        onPress={() => setCurtiu(!curtiu)} />
      <Text>{curtiu ? '👍 Você curtiu isso!' : '👎 Você ainda não curtiu.'}</Text>
    </>
  )

};
