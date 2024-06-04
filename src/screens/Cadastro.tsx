import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';

export default function Cadastro() {
    
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CADASTRO</Text>
      </View>
      
      <View style={styles.iconContainer}>
        <Image source={require('../../assets/Cadeado.png')} style={styles.icon} />
      </View>
      
      <TextInput style={styles.input} placeholder="CPF" placeholderTextColor="#a0a0a0" />
      <TextInput style={styles.input} placeholder="Nome completo" placeholderTextColor="#a0a0a0" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Data de nascimento" placeholderTextColor="#a0a0a0" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#a0a0a0" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="CEP" placeholderTextColor="#a0a0a0" />
      <TextInput style={styles.input} placeholder="Rua" placeholderTextColor="#a0a0a0" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Número" placeholderTextColor="#a0a0a0" />
      <TextInput style={styles.input} placeholder="Bairro" placeholderTextColor="#a0a0a0" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Cidade" placeholderTextColor="#a0a0a0" />
      <TextInput style={styles.input} placeholder="Estado" placeholderTextColor="#a0a0a0" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="País" placeholderTextColor="#a0a0a0" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.registerText}>Já tem cadastro? Clique aqui</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.footer}/>
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
    marginBottom: 30,
    width: '100%',
    marginTop: 35,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 80,
    height: 80,
  },
  input: {
    height: 45,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#d3d3d3',
    marginHorizontal: 45,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 60,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    alignSelf: 'center',
    color: '#a0a0a0',
    marginBottom: 35,
  },
  footer: {
    backgroundColor: '#A4C8FF',
    padding: 20,
  },
});
