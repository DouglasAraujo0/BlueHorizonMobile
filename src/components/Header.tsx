import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../assets/Golfinho.png')} style={styles.image} />
        <Text style={styles.text}>BLUEHORIZON</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A4C8FF',
    height: 90,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 40,
  },
  image: {
    width: 65,
    height: 65,
    marginRight: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 5,
  },
});
