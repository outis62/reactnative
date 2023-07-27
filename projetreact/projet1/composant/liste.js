import React, { Component } from 'react';

import { Text, TextInput, View, TouchableHighlight, Image, FlatList } from 'react-native';
import Style1 from './style';



export default class Liste extends Component {
 state={
    data1:[]
 }
 componentDidMount=()=>{
    this.List()
 }
 List=()=>{
    fetch('http://37.187.48.129:9191/react/liste.php', {
        // method: 'POST',
        headers: {
          Accept: 'application/json , text/plain',
        },
       
      }
      )
        .then(response => response.json())
        .then(responseJson => {
         this.setState({data1:responseJson})
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
 
  render() {
    return (
        <View style={Style1.view}>
            <View style={Style1.enteteliste}>
                <Text style={Style1.enteteId}>Id</Text> 
                <Text style={Style1.enteteNom}>Nom</Text>
            </View>
            <FlatList
            data={this.state.data1}
            renderItem = {({ item }) => (
            <View style={Style1.ligneliste}>
                <Image
                style={Style1.logo}
                source={{uri:'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'}}
                />
                <Text style={Style1.textId}>{item.id}</Text> 
                <Text style={Style1.textNom}>{item.nom}</Text> 
            </View>   
            )

            }
            
            />
        </View>
    );
  }
} 





