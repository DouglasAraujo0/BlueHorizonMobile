import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Home2() {

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}/>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View>
          
          <View style={styles.welcomeContainer}>
            <Image source={require('../../assets/Golfinho.png')} style={styles.image} />
            <Text style={styles.welcome}>BEM-VINDO AO</Text>
          </View>

          <View style={styles.blueHorizonContainer}>
            <Text style={styles.blueHorizonText}>BLUEHORIZON</Text>
          </View>

          <View style={styles.what}>
            <Text style={styles.whatText}>O que você quer fazer hoje?</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OqueE')}>
              <Text style={styles.buttonText}>Sobre a BlueHorizon</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PontosColeta')}>
              <Text style={styles.buttonText}>Pontos de Coleta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MaisLixo')}>
              <Text style={styles.buttonText}>Praias com mais lixo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonProfile} onPress={() => navigation.navigate('Perfil')}>
              <Text style={styles.buttonText}>Ver meu perfil</Text>
            </TouchableOpacity>
            <View style={{ marginBottom: 30 }} />
          </View>
        </View>
        </ScrollView>
        <View style={styles.footer}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight : 70,
  },
  blueHorizonContainer: {
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 5,
    marginTop: 10,
  },
  blueHorizonText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: -35,
    marginBottom: 20,
  },  
  header: {
    padding: 25,
    backgroundColor: '#A4C8FF',
  },
  image: {
    width: 65,
    height: 65,
    marginRight: 10,
    marginTop: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#1189E0',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    width: '70%', 
  },
  buttonProfile: {
    backgroundColor: '#0D72BB',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    width: '70%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    flex: 1,
    backgroundColor: '#A4C8FF',
    padding: 20,

  },
  what: {
    backgroundColor: '#363636',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center', 
    marginBottom: 30,
  },
  whatText: {
    color: '#fff', // Mudança para preto
    fontSize: 16,
    fontWeight: 'bold', // Adição do negrito
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});
