import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'; // Adicionando o Alert
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../services/FirebaseConfig';
import { doc, setDoc } from 'firebase/firestore';


export default function Cadastro() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');

  
const handleCadastro = async () => {
  // Validação de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Alert.alert('Email inválido'); // Alerta para e-mail inválido
    return;
  }

  // Validação de outros campos obrigatórios
  if (nomeCompleto.trim() === '') {
    Alert.alert('Nome completo é obrigatório'); // Alerta para nome completo em branco
    return;
  }
  if (dataNascimento.trim() === '' || !/^\d{2}\/\d{2}\/\d{4}$/.test(dataNascimento)) {
    Alert.alert('Data de nascimento inválida'); // Alerta para data de nascimento inválida
    return;
  }
  if (senha.trim().length < 6) {
    Alert.alert('A senha deve ter pelo menos 6 caracteres'); // Alerta para senha curta
    return;
  }
  if (cep.trim() === '') {
    Alert.alert('CEP é obrigatório'); // Alerta para CEP em branco
    return;
  }
  if (rua.trim() === '') {
    Alert.alert('Rua é obrigatória'); // Alerta para rua em branco
    return;
  }
  if (numero.trim() === '') {
    Alert.alert('Número é obrigatório'); // Alerta para número em branco
    return;
  }
  if (bairro.trim() === '') {
    Alert.alert('Bairro é obrigatório'); // Alerta para bairro em branco
    return;
  }
  if (cidade.trim() === '') {
    Alert.alert('Cidade é obrigatória'); // Alerta para cidade em branco
    return;
  }
  if (estado.trim() === '') {
    Alert.alert('Estado é obrigatório'); // Alerta para estado em branco
    return;
  }
  if (pais.trim() === '') {
    Alert.alert('País é obrigatório'); // Alerta para país em branco
    return;
  }

  try {
    // Criar novo usuário com e-mail e senha
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;
    console.log('Usuário cadastrado com sucesso:', user);

    // Adicionar informações adicionais no Firestore
    await setDoc(doc(db, "users", user.uid), {
      nomeCompleto: nomeCompleto,
      dataNascimento: dataNascimento,
      email: email,
      cep: cep,
      rua: rua,
      numero: numero,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      pais: pais
    });

    // Limpar os campos após o cadastro
    setEmail('');
    setNomeCompleto('');
    setDataNascimento('');
    setSenha('');
    setCep('');
    setRua('');
    setNumero('');
    setBairro('');
    setCidade('');
    setEstado('');
    setPais('');

    Alert.alert('Usuário cadastrado com sucesso!');
    setTimeout(() => navigation.navigate('Login'), 2000);
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error.message);
    Alert.alert('Erro ao cadastrar usuário. Por favor, tente novamente mais tarde.');
  }
};

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>CADASTRO</Text>
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
          placeholder="Nome completo"
          placeholderTextColor="#a0a0a0"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de nascimento (DD/MM/AAAA)"
          placeholderTextColor="#a0a0a0"
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#a0a0a0"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          placeholderTextColor="#a0a0a0"
          keyboardType='numeric'
          value={cep}
          onChangeText={(text => {
            if (text.length <= 8) {
              setCep(text);
            }
          })}
        />
        <TextInput
          style={styles.input}
          placeholder="Rua"
          placeholderTextColor="#a0a0a0"
          value={rua}
          onChangeText={setRua}
        />
        <TextInput
          style={styles.input}
          placeholder="Número"
          placeholderTextColor="#a0a0a0"
          value={numero}
          onChangeText={setNumero}
        />
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          placeholderTextColor="#a0a0a0"
          value={bairro}
          onChangeText={setBairro}
        />
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          placeholderTextColor="#a0a0a0"
          value={cidade}
          onChangeText={setCidade}
        />
        <TextInput
          style={styles.input}
          placeholder="Estado"
          placeholderTextColor="#a0a0a0"
          value={estado}
          onChangeText={setEstado}
        />
        <TextInput
          style={styles.input}
          placeholder="País"
          placeholderTextColor="#a0a0a0"
          value={pais}
          onChangeText={setPais}
        />

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
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
