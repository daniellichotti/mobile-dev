import { StyleSheet, Text, View } from "react-native";
import { ButtonNav } from "../components/Button";

export function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre José:</Text>
      <Text style={styles.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut soluta ex dolor tenetur itaque nulla consectetur, ipsum magnam exercitationem facere animi labore perspiciatis accusantium excepturi magni expedita nobis aspernatur.</Text>
      <ButtonNav title='Sobre' navigateTo={() => navigation.navigate('Inicio')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e8f0',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    padding: 30
  },
  info: {
    textAlign: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})