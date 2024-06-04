import { View, Text, StyleSheet } from "react-native";

export default function PontosColeta() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>PONTOS DE COLETA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#363636',
    padding: 10,
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
    marginTop: 35,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
