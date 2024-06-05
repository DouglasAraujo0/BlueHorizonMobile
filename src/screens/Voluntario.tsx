import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Voluntario() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>COMO VIRAR UM VOLUNTÁRIO?</Text>
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
          Para se tornar um voluntário, primeiramente você precisa realizar um cadastro na BlueHorizon.
        </Text>

        <Text style={styles.subHeader}>
          Depois disso, é muito simples: basta ir para uma praia e começar a limpeza!
        </Text>

        <View style={styles.listItem}>
          <Image
            style={styles.listItemIcon}
            source={require('../../assets/Atencao.png')}
          />
          <Text style={styles.listItemText}>
            É importante que você veja nossa lista dos pontos de coleta do lixo, pois apenas eles estão credenciados para a contagem.
          </Text>
        </View>

        <Text style={styles.subHeader}>
          Em seu perfil dentro da BlueHorizon é possível acompanhar seu progresso, verificar quanto de lixo você já retirou e o dinheiro disponível para sacar. Imagina que legal ganhar dinheiro fazendo o bem?
        </Text>

        <TouchableOpacity style={styles.joinButton} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.joinButtonText}>Junte-se a nós</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home1')}>
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
    marginHorizontal: 20,
    fontSize: 14,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  listItemIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    right: 5,
  },
  listItemText: {
    fontSize: 14,
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'left',
    marginHorizontal: 10,
    right: 20,
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
