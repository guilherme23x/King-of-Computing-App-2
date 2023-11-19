import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Três primeiros botões da Tela
import Login from './LeC/Login';
import Cadastro from './LeC/Cadastro';
import Esqueceu from './LeC/Esqueceu';
// Páginas
import Home from './Paginas/Home';
import Agendamento from './Paginas/Agendamento';
import Melhorias from './Paginas/Melhorias';
import Usuario from './Paginas/Usuario';
import Info from './Paginas/Info';
import SobreCadastro from './Paginas/SobreCadastro';
// Subpastas
import Consulta from './Subpaginas/Agendamento/Consulta';
import Retirada from './Subpaginas/Agendamento/Retirada';
import Editar from './Subpaginas/Usuario/editar';
import Software from './Subpaginas/Melhorias/Software';
import Hardware from './Subpaginas/Melhorias/Hardware';



const Stack = createStackNavigator();

{
  /* Quais páginas estão entre as navegações  */
}

export default function Navagacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="SobreCadastro"
          component={SobreCadastro}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Info"
          component={Info}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Hardware"
          component={Hardware}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Retirada"
          component={Retirada}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Melhorias"
          component={Melhorias}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Software"
          component={Software}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Consulta"
          component={Consulta}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Editar"
          component={Editar}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Usuario"
          component={Usuario}
          options={{ headerShown: false }}
        />
       <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />     
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Esqueceu"
          component={Esqueceu}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Agendamento"
          component={Agendamento}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
