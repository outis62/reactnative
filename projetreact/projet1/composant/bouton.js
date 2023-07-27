import React, {Component} from 'react';
import {TouchableHighlight, Text,} from 'react-native'
import Style from "./style"
const CustomButton=(props)=>{

    return(
        <TouchableHighlight
        onPress={props.action}
        style={Style.butoonajout}>
        <Text style={Style.textajout}>{props.titre}</Text>
      </TouchableHighlight> 
    )
}
module.exports=CustomButton