import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user
      console.log(user);
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      setTimeout(() => navigation.navigate('Home2'), 2000);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>LOGIN</Text>
      </View>
      
      <View style={styles.iconContainer}>
        <Image source={require('../../assets/Cadeado.png')} style={styles.icon} />
      </View>
      
      <TextInput 
      style={styles.input}
      placeholder="E-mail" 
      placeholderTextColor="#a0a0a0" 
      value={email}
      onChangeText={setEmail}
      />
      <TextInput 
      style={styles.input} 
      placeholder="Senha" 
      placeholderTextColor="#a0a0a0" 
      secureTextEntry={true} 
      value={password}
      onChangeText={setPassword}
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.registerText}>Não tem cadastro? Clique aqui</Text>
      </TouchableOpacity>
      
      <View style={styles.footer}/>
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
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#a0a0a0',
    marginBottom: 30,
    marginRight: 50,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 60,
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
