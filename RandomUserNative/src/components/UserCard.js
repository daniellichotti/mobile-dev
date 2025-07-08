import { Image, StyleSheet, Text, View } from "react-native";

export function UserCard({ user }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.picture.medium }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{user.name.first} {user.name.last}</Text>
        <Text>{user.email}</Text>
        <Text>{user.location.country}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    marginLeft: 10
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
})