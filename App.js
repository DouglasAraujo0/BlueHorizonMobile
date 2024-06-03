  import React from 'react';
  import 'react-native-gesture-handler';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import Home1 from './src/screens/Home1';
  import Home2 from './src/screens/Home2';
  import Cadastro from './src/screens/Cadastro';
  import Login from './src/screens/Login';
  import MaisLixo from './src/screens/MaisLixo';
  import OqueE from './src/screens/OqueE';
  import Perfil from './src/screens/Perfil';
  import PontosColeta from './src/screens/PontosColeta';
  import Voluntario from './src/screens/Voluntario';
  import Header from './src/components/Header';

  const Stack = createStackNavigator();

  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home2'>
          <Stack.Screen name="Home1" component={Home1} options={{headerShown: false}} />
          <Stack.Screen name="Home2" component={Home2} options={{headerShown: false}} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{header: ()=> <Header/>}} />
          <Stack.Screen name="Login" component={Login} options={{header: ()=> <Header/>}} />
          <Stack.Screen name="MaisLixo" component={MaisLixo} options={{header: ()=> <Header/>}} />
          <Stack.Screen name="OqueE" component={OqueE} options={{header: ()=> <Header/>}} />
          <Stack.Screen name="Perfil" component={Perfil} options={{header: ()=> <Header/>}} />
          <Stack.Screen name="PontosColeta" component={PontosColeta} options={{header: ()=> <Header/>}} />
          <Stack.Screen name="Voluntario" component={Voluntario} options={{header: ()=> <Header/>}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
