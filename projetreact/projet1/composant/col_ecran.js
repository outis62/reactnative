import React, { Component } from 'react';

import { Text, TextInput, View, TouchableHighlight, Image, StyleSheet, Linking, SafeAreaView } from 'react-native';
import Style1 from "./composant/style";
import Bouton from "./composant/bouton";
export default class App extends Component {

  
  render() {
    return (
      <View style={{flex:1,flexDirection:'row',backgroundColor:'yellow'}}>

        <View style={{flex:1/2, flexDirection:'row'}}>
        <View style={{flex:3,backgroundColor:'red'}}>
          <Text style={{justifyContent:'center',alignItems:'center', color:'blue', fontWeight:'bold'}}>Boujour</Text>
        </View>
        <View style={{flex:2,backgroundColor:'yellow'}}>
          <Text style={{justifyContent:'center',alignItems:'center', color:'red', fontWeight:'bold'}}>ZABRE</Text>
        </View>
        <View style={{flex:1,backgroundColor:'blue'}}>
          <Text style={{flexDirection:'column',justifyContent:'center',alignItems:'center', color:'yellow', fontWeight:'bold'}}>Salutation</Text>
        </View>
        </View>

        <View style={{flex:1/2, flexDirection:'column'}}>
        <View style={{flex:3,backgroundColor:'white'}}></View>
        <View style={{flex:2,backgroundColor:'green'}}></View>
        <View style={{flex:1,backgroundColor:'navy'}}></View>
        </View>
      </View>
    );
  }
} 