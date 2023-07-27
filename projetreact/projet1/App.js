import React, {Component, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login1 from './composant/login'
import Ajout from './composant/ajout'
import Liste from './composant/liste'
import Accueil from './composant/home'

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Login1'}
       screenOptions={{
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        >
        <Stack.Screen name='Ajout' component={Ajout} 
         options={{
          title: 'Ajouter participant'
        }}
        />
          <Stack.Screen name='Login1' component={Login1} 
          options={{
            title: 'Authentification',
            headerBackTitleVisible:false

            
          }}
          />
          <Stack.Screen name='Liste' component={Liste} 
          options={{
            title: 'Liste des participants',
            headerBackTitleVisible:false
          }}
          />
            <Stack.Screen name='Accueil' component={Accueil} 
          options={{
            title: 'Home',
            //desactive la visibilite du bouton pour le retour au niveau de header
            headerBackVisible: false,
            headerBackTitleVisible:false
          
          }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}