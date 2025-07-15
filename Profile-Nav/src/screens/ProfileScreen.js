import { Image, StyleSheet, Text, View } from "react-native";
import { ButtonNav } from "../components/Button";

export function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: 'https://randomuser.me/api/portraits/lego/6.jpg' }} />
      <Text>José</Text>
      <ButtonNav title='Sobre' navigateTo={() => navigation.navigate('Sobre')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e8f0',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  img: {
    width: 100,
    height: 100
  }
})