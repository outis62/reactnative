import React, { Component } from 'react';

import { Text, TextInput, View, TouchableHighlight, Image, } from 'react-native';
import Style1 from "./style";
import Bouton from "./bouton";
export default class Ajout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      utilisateur: '',
      motdepasse: '',
      nom: '',
      prenom: '',
      telephone: '',
      pays: '',
      fonction: '',
      email:'',
      nomisValide:true,
      userisValide:true,
      prenomisValide:true,
      motdepasseisValide:true,
    }
  }
  ajouter=()=>{

    if(this.state.nom == '')
    {
      this.setState({nomisValide:false})
    // alert('Veuillez saisir votre nom');
    }
    else if(this.state.prenom == '')
    {
      this.setState({prenomisValide:false})
    // alert('Veuillez saisir votre prenom');
    }
    else if(this.state.utilisateur == '')
    {
      this.setState({userisValide:false})
    // alert('Veuillez saisir votre utilisateur');
    }
    else if(this.state.motdepasse == '')
    {
      this.setState({motdepasseisValide:false})
    // alert('Veuillez saisir votre mot de passe');
    }
    else{
      this.setState({motdepasseisValide: true, nomisValide: true, userisValide: true, prenomisValide:true});
      fetch('http://37.187.48.129:9191/react/insert.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json , text/plain',
        },
        body: 
        'nom=' + encodeURIComponent(this.state.nom) +
        '&prenom=' + encodeURIComponent(this.state.prenom) +
        '&fonction=' + encodeURIComponent(this.state.fonction) +
        '&telephone=' + encodeURIComponent(this.state.telephone) +
        '&pays=' + encodeURIComponent(this.state.pays) +
        '&email=' + encodeURIComponent(this.state.email) +
        '&utilisateur=' + encodeURIComponent(this.state.utilisateur) +
        '&motdepass=' + encodeURIComponent(this.state.motdepasse),
      }
      )
        .then(response => response.json())
        .then(res => {
          // alert(res.id);
          this.props.navigation.navigate('Liste')
        })
        .catch(error => {
          console.error(error);
        });
    
  
      // alert('Ajout !');
      // this.props.navigation.navigate('Liste')
    }
  }
  annuler=()=>{
    alert('Annuler')
  }
  render() {
    return (
      <View style={Style1.viewGlobal}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text>Nom: </Text>
        <TextInput
          style={this.state.nomisValide? Style1.textinputajout:Style1.textinputajoutInvalide}
          value={this.state.nom}
          placeholderTextColor={'black'}
          onChangeText={(text)=>this.setState({nom:text})} 
        />
        </View>

        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text>Prenom: </Text>
        <TextInput
          style={this.state.prenomisValide? Style1.textinputajout:Style1.textinputajoutInvalide}
          value={this.state.prenom}
          placeholderTextColor={'black'}
          onChangeText={(text)=>this.setState({prenom:text})}
        />
        </View>
        
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text>Telephone: </Text>
        <TextInput
          style={Style1.textinputajout}
          value={this.state.telephone}
          placeholderTextColor={'black'} 
          keyboardType='numeric'
          onChangeText={(text)=>this.setState({telephone:text})}
        />
        </View>

        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text>Pays: </Text>
        <TextInput
          style={Style1.textinputajout}
          value={this.state.pays}
          placeholderTextColor={'black'}
          onChangeText={(text)=>this.setState({pays:text})}
        />
        </View>

        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text>Fonction: </Text>
        <TextInput
          style={Style1.textinputajout}
          value={this.state.fonction}
          placeholderTextColor={'black'}
          onChangeText={(text)=>this.setState({fonction:text})}
        />
        </View>

        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text>Email: </Text>
        <TextInput
          style={Style1.textinputajout}
          value={this.state.email}
          placeholderTextColor={'black'}
          keyboardType='email-address'
          onChangeText={(text)=>this.setState({email:text})}
        />
        </View>

        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text>Utilisateur: </Text>
        <TextInput
          style={this.state.userisValide? Style1.textinputajout:Style1.textinputajoutInvalide}
          value={this.state.utilisateur}
          placeholderTextColor={'black'}
          onChangeText={(text)=>this.setState({utilisateur:text})}
        />
        </View>

        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text>Mot de passe: </Text>
        <TextInput
          style={this.state.motdepasseisValide? Style1.textinputajout:Style1.textinputajoutInvalide}
          value={this.state.motdepasse}
          secureTextEntry={true}
          maxLength={8}
          placeholderTextColor={'black'}
          onChangeText={(text)=>this.setState({motdepasse:text})}
        />
        </View>
         
        {/* <TouchableHighlight
          style={Style1.butoonajout}>
          <Text style={Style1.textajout}> Ajouter </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={Style1.butoonannuler}>
          <Text style={Style1.textannuler}>Annuler </Text>
        </TouchableHighlight> */}
        <View style={Style1.row}>
        <Bouton titre={'Ajouter'} action={this.ajouter} />
        <Bouton titre={'Annuler'} action={this.annuler} /> 
        </View>
      </View>
    );
  }
} 