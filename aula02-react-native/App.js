import { StyleSheet, View } from "react-native";
import { ToDo } from "./src/components/ToDo";




export default function App() {

  return (
    <View style={styles.container}>
      <ToDo />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})