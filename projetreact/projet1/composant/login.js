import React, { Component } from 'react';

import { Text, TextInput, View, TouchableHighlight, Image, } from 'react-native';
import Style1 from './style';

export default class Login extends Component {
  // state={
  //   utilisateur:'',
  //   motdepasse:''
  // }
  constructor(props) {
    super(props)
    this.state = {
      utilisateur: '',
      motdepasse: ''
    }
  }
  authent = () => {
    // alert("user :" + this.state.utilisateur +" password: " + this.state.motdepasse)
    
    if (this.state.utilisateur == '') {
      alert('Veuillez saisir votre Login')
    }
    else if (
      this.state.motdepasse == ''
    ) {
      alert('Veuillez saisir votre mot de passe')
    }
    else {
      fetch('http://37.187.48.129:9191/react/cc.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json , text/plain',
        },
        body: 'utilisateur=' + encodeURIComponent(this.state.utilisateur) +
          '&password=' + encodeURIComponent(this.state.motdepasse),
      }
      )
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.exist == true) {
            // alert('utilisateur trouver');
            this.props.navigation.navigate('Accueil')
          }
          else {
            alert('Veuillez verifier vos coordonnees');
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
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
          source={require('../image/logo.png')}
        />
        <TextInput
          style={Style1.textinputuser}
          placeholder={'Utilisateur'}
          value={this.state.utilisateur}
          onChangeText={(text) => this.setState({ utilisateur: text })}
        />
        <TextInput
          style={Style1.textinputmdp}
          placeholder={'Mot de passe'}
          value={this.state.motdepasse}
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ motdepasse: text })}
        />
        <Text style={Style1.mdpoublier}>Mot de passe oublier ?</Text>
        <TouchableHighlight
          style={Style1.butoonauthent}
          onPress={() => this.authent()}
        >
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





