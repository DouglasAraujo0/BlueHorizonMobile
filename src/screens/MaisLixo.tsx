import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const images = [
  require('../../assets/Numero1.png'),
  require('../../assets/Numero2.png'),
  require('../../assets/Numero3.png'),
  require('../../assets/Numero4.png'),
  require('../../assets/Numero5.png'),
];

export default function MaisLixo() {
  const navigation = useNavigation();

  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
  
        setLogado(true);
      } else {

        setLogado(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleHomePress = () => {
    if (logado) {
      navigation.navigate('Home2');
    } else {
      navigation.navigate('Home1');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>PRAIAS COM MAIS LIXO</Text>
        </View>

        <Text style={styles.description}>
          A BlueHorizon tem a missão de contribuir com a limpeza dos oceanos por meio de uma união coletiva.
        </Text>

        <View style={styles.wave}>
          <Image
            style={styles.waveImage}
            source={require('../../assets/Onda.jpg')}
          />
        </View>

        <Text style={styles.subHeader}>
        Não é possível comparar o nível de poluição nas praias, por isso a medição é feita de acordo com as condições inpróprias de uso:
        </Text>

        {['Praia de Perpétuo Socorro, no Amapá - imprópria em 80% das análises.', 'Praia Pedra Furada, na Bahia - imprópria em 68% das análises.', 'Praia Jacaraípe, no Espírito Santo - imprópria em 100% das análises.', 'Praia de Botafogo, no Rio de Janeiro - imprópria em 50% das análises.', 'Praia Matadouro, em Santa Catarina - imprópria em 100% das análises.'].map((beach, index) => (
          <View key={index} style={styles.listItem}>
            <Image
              style={styles.listItemIcon}
              source={images[index]}
            />
            <Text style={styles.listItemText}>{beach}</Text>
          </View>
        ))}

        <TouchableOpacity style={styles.joinButton} onPress={()=> navigation.navigate('Login')}>
          <Text style={styles.joinButtonText}>Junte-se a nós</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.homeButton} onPress={handleHomePress}>
            <Image
              style={styles.homeButtonIcon}
              source={require('../../assets/Casa.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    marginBottom: 20,
    marginTop: 40,
    width: '100%',
    alignSelf: 'stretch',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  wave: {
    width: '130%',
    height: 70,
    overflow: 'hidden',
    marginBottom: 20,
    marginLeft: -60,
  },
  waveImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  subHeader: {
    textAlign: 'auto',
    marginBottom: 20,
    marginLeft: 10,
    fontSize: 14,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
  },
  listItemIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  listItemText: {
    fontSize: 16,
    flex: 1,
  },
  joinButton: {
    backgroundColor: '#1189E0',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    marginHorizontal: 60,
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#A4C8FF',
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  homeButton: {
    alignItems: 'center',
  },
  homeButtonIcon: {
    width: 45,
    height: 45,
  },
});

