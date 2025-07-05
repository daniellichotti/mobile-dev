import { Image, StyleSheet, Text, View } from "react-native";

export function Avatar({ name, urlImg }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: urlImg }} />
      <Text style={styles.text}>{name}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 20
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 20
  },
  text: {
    fontSize: 20,
    fontWeight: '300',
    color: 'blue'
  }
})