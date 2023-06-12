import React, { Component } from 'react';

import { Text, TextInput, View, TouchableHighlight, Image, } from 'react-native';
import Style1 from "./composant/style";

export default class App extends Component {
  render() {
    return (
      <View
        style={Style1.viewGlobal}>

        <Text style={Style1.simplon} >Simplon.co/BF</Text>
        {/* <Image  
        style={{width:120,height:120, borderRadius:20,}}
        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/6/60/%C3%89tudiant.jpg'}}
        />   */}
        <Image
          style={Style1.img1}
          source={require('./image/logo.png')}
        />
        <TextInput
          style={Style1.textinputuser}
          placeholder={'Utilisateur'}
          value={''}
        />
        <TextInput
          style={Style1.textinputmdp}
          placeholder={'Mot de passe'}
          value={''}
          onSecureTextEntry={true}
        />
        <Text style={Style1.mdpoublier}>Mot de passe oublier?</Text>
        <TouchableHighlight
          style={Style1.butoonauthent}>
          <Text style={Style1.textLogin}>S'authentifier</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={Style1.butooninscrit}>
          <Text style={Style1.textinscrit}>
            S'inscrire
          </Text>
        </TouchableHighlight>

      </View>
    );
  }
}