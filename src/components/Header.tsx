import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View>
        <Text>Home1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})