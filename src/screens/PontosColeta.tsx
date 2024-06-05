import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

const images = [
  require('../../assets/Numero1.png'),
  require('../../assets/Numero2.png'),
  require('../../assets/Numero3.png'),
  require('../../assets/Numero4.png'),
  require('../../assets/Numero5.png'),
];

export default function PontosColeta() {
  const navigation = useNavigation();

  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        // Usuário está logado
        setLogado(true);
      } else {
        // Usuário não está logado
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
          <Text style={styles.headerText}>PONTOS DE COLETA</Text>
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
          Abaixo, confira os pontos de coleta credenciados pela BlueHorizon e autorizados a realizar o rece
        </Text>

        {['Salvador - BA', 'São Paulo - SP', 'Rio de Janeiro - RJ', 'Florianópolis - SC', 'Recife - PE'].map((city, index) => (
          <View key={index} style={styles.listItem}>
            <Image
              style={styles.listItemIcon}
              source={images[index]}
            />
            <Text style={styles.listItemText}>Centro de Coletas {city}</Text>
          </View>
        ))}

        <TouchableOpacity style={styles.joinButton} onPress={()=> navigation.navigate('Cadastro')}>
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
    marginHorizontal: 20,
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

