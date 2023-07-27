import React, { Component } from 'react';

import { Text, TextInput, View, TouchableHighlight, Image, } from 'react-native';
import Style1 from './style';

export default class Home extends Component {
 
 
  render() {
    return (
        <View style={Style1.viewGlobal}>
            <Text style={Style1.titre}>Bienvenu a tous</Text>
            <TouchableHighlight style={Style1.option}
            onPress={()=>this.props.navigation.navigate('Ajout')}
            >
            <Text style={Style1.text1}>Ajouter participant</Text>
            </TouchableHighlight>
             
            <TouchableHighlight style={Style1.option}
            onPress={()=>this.props.navigation.navigate('Liste')}
            >
            <Text style={Style1.text1}>Liste des participants</Text>
            </TouchableHighlight>
        </View>
    );
  }
} 





