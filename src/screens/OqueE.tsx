import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

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
          <Text style={styles.headerText}>O QUE É A BLUEHORIZON?</Text>
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

        <Text style={[styles.subHeader, styles.textLeft]}>
          De um lado, temos empresas engajadas na preservação dos oceanos e que querem financiar o projeto e incentivar os voluntários.
        </Text>

        <Text style={[styles.subHeader, styles.textRight]}>
          Do outro lado, temos voluntários que trabalham na retirada de lixo dos oceanos/praias e que recebem um determinado valor para isso.
        </Text>

        <View style={styles.arrowContainer}>
          <Image
            style={styles.arrowImage}
            source={require('../../assets/arrows.png')}
          />
          <Text style={[styles.subHeader2, styles.flexText]}>
            Assim, ao mesmo tempo em que estamos garantindo um futuro limpo ao retirar os lixos dos oceanos, também garantimos aos voluntários o recebimento de dinheiro pelo seu esforço e cuidado.
          </Text>
        </View>

        <TouchableOpacity style={styles.joinButton} onPress={() => navigation.navigate('Cadastro')}>
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
    marginBottom: 25,
    fontSize: 14,
  },
  subHeader2: {
    marginTop: 50,
    marginBottom: 20,
    fontSize: 14,
    marginEnd: 50,
    minWidth: 350,
    fontWeight: 'bold',
  },
  textLeft: {
    textAlign: 'left',
    marginLeft: 10,
  },
  textRight: {
    textAlign: 'right',
    marginRight: 10,
  },
  textCenter: {
    textAlign: 'center',
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    paddingHorizontal: 5,
    position: 'relative', 
    marginStart: 50,
  },
  flexText: {
    flex: 1,
    textAlign: 'center', 
  },
  arrowImage: {
    width: 45,
    height: 45,
    position: 'absolute',
    top: -10,
    left: -40,
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
