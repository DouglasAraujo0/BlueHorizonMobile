# API Documentation

## Cadastro de Usuário

### Estrutura do Documento do Usuário

Cada documento na coleção `users` representa um usuário e possui a seguinte estrutura:

- `nomeCompleto` (string): O nome completo do usuário.
- `dataNascimento` (string): A data de nascimento do usuário no formato DD/MM/AAAA.
- `email` (string): O e-mail do usuário.
- `cep` (string): O CEP do usuário.
- `rua` (string): A rua do usuário.
- `numero` (string): O número da residência do usuário.
- `bairro` (string): O bairro do usuário.
- `cidade` (string): A cidade do usuário.
- `estado` (string): O estado do usuário.
- `pais` (string): O país do usuário.

### Endpoints

#### Create

Cria um novo documento de usuário na coleção `users`.

```javascript
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from '../services/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Função para criar um novo usuário
const createUser = async (email, senha, userData) => {
  try {
    // Cria o usuário no Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;

    // Salva os dados do usuário no Firestore
    await setDoc(doc(db, 'users', user.uid), userData);
    console.log('Usuário cadastrado com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error.message);
  }
};

// Exemplo de uso
const userData = {
  nomeCompleto: 'Fulano da Silva',
  dataNascimento: '01/01/1990',
  email: 'fulano@example.com',
  cep: '12345678',
  rua: 'Rua Exemplo',
  numero: '123',
  bairro: 'Bairro Exemplo',
  cidade: 'Cidade Exemplo',
  estado: 'Estado Exemplo',
  pais: 'País Exemplo'
};

createUser('fulano@example.com', 'senha123', userData);


import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../services/FirebaseConfig';

// Função para buscar dados do usuário
const fetchUserData = async (userId) => {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const userData = docSnap.data();
      console.log('Dados do usuário:', userData);
      return userData;
    } else {
      console.log('Documento não encontrado!');
    }
  } catch (error) {
    console.error('Erro ao obter os dados do usuário:', error);
  }
};

// Exemplo de uso
const userId = 'user123';
fetchUserData(userId).then(userData => console.log(userData));


import { doc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../services/FirebaseConfig';

// Função para atualizar dados do usuário
const updateUser = async (userId, updatedData) => {
  try {
    const docRef = doc(db, 'users', userId);
    await updateDoc(docRef, updatedData);
    console.log('Dados do usuário atualizados com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar os dados do usuário:', error);
  }
};

// Exemplo de uso
const updatedData = { nomeCompleto: 'Ciclano de Souza', cidade: 'Rio de Janeiro' };
updateUser('user123', updatedData);


import { doc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../services/FirebaseConfig';

// Função para excluir usuário
const deleteUser = async (userId) => {
  try {
    const docRef = doc(db, 'users', userId);
    await deleteDoc(docRef);
    console.log('Usuário excluído com sucesso!');
  } catch (error) {
    console.error('Erro ao excluir o usuário:', error);
  }
};

// Exemplo de uso
const userId = 'user123';
deleteUser(userId);
