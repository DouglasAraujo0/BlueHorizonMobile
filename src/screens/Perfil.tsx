import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../services/FirebaseConfig';

export default function Perfil() {
  const navigation = useNavigation();

  
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [cidade, setCidade] = useState('');
  
    useEffect(() => {
      
      const fetchUserData = async () => {
        try {
          const docRef = doc(db, 'users', auth.currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setNome(userData.nomeCompleto);
            setIdade(userData.dataNascimento);
            setCidade(userData.cidade);
          } else {
            console.log('Documento não encontrado!');
          }
        } catch (error) {
          console.error('Erro ao obter os dados do usuário:', error);
        }
      };
  
      fetchUserData();
    }, []);
  
   
    const handleUpdateName = async () => {
      try {
        const docRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(docRef, { nomeCompleto: 'Novo Nome' }); 
        setNome('Novo Nome'); 
        Alert.alert('Nome atualizado com sucesso!');
      } catch (error) {
        console.error('Erro ao atualizar o nome:', error);
        Alert.alert('Erro ao atualizar o nome. Por favor, tente novamente mais tarde.');
      }
    };
  

    const handleDeleteAccount = async () => {
      try {
        const docRef = doc(db, 'users', auth.currentUser.uid);
        await deleteDoc(docRef);
        Alert.alert('Conta excluída com sucesso!');
    
      } catch (error) {
        console.error('Erro ao excluir a conta:', error);
        Alert.alert('Erro ao excluir a conta. Por favor, tente novamente mais tarde.');
      }
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/Tartaruga.png')} style={styles.profileImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Fulano da Silva</Text>
          <View style={styles.tagContainer}>
            <View style={styles.tagWrapper}>
              <Text style={styles.tag}>35 anos</Text>
            </View>
            <View style={styles.tagWrapper}>
              <Text style={styles.tag}>São Paulo</Text>
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.statsContainer}>
        <Image source={require('../../assets/pngwing.com.png')} style={styles.statsImage} />
        <Text style={styles.statsText}>Você já retirou 5kg de lixo do oceano!</Text>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Seu saldo: <Text style={styles.balanceAmount}>R$150,00</Text></Text>
      </View>

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateName}>
        <Text style={styles.buttonText}>Atualizar Nome</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
        <Text style={styles.buttonText}>Excluir Conta</Text>
      </TouchableOpacity>
      
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
          <Image source={require('../../assets/pngwing.com (1).png')} style={styles.footerImage}/>
        </TouchableOpacity>
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    marginEnd: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  updateButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
  },
  deleteButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
  },
  profileImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: 5,
    borderRadius: 30,
  },
  tagWrapper: {
    overflow: 'hidden',
    borderRadius: 30,
    marginRight: 5,
  },
  tag: {
    backgroundColor: '#1189E0',
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    padding: 10,
    marginBottom: 30,
  },
  statsImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  statsText: {
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
  },
  balanceContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    width: '80%',
    alignSelf: 'stretch',
  },
  balanceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  balanceAmount: {
    color: '#00b300',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#A4C8FF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
  },
  footerImage: {
    width: 50,
    height: 50,
  },
});
