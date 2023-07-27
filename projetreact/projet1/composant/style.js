import React, { component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    simplon: { color: 'white', fontWeight: 'bold', fontSize: 20, },
    viewGlobal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        borderRadius: 10,
    },
    img1: { width: 120, height: 120, borderRadius: 30, },
    textinputuser: { width: 200, height: 45, borderWidth: 2, margin: 15, borderColor: 'white', borderRadius: 40, paddingStart: 70, },
    mdpoublier: { color: 'red', fontSize: 15, },
    textinputmdp: { width: 200, height: 45, borderWidth: 2, margin: 15, borderColor: 'white', borderRadius: 40, paddingStart: 60, },
    butoonauthent: { width: 200, height: 50, borderwidth: 0, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 25, marginTop: 10 },
    butooninscrit: { width: 200, height: 50, borderwidth: 0, backgroundColor: '#3533cd', alignItems: 'center', justifyContent: 'center', borderRadius: 25, marginTop: 10 },
    textLogin: { color: 'black', fontSize: 15, fontWeight: '700', },
    textinscrit: { color: 'white', fontSize: 15, fontWeight: '700', },
    textinputajout: { width: 250, height: 40, borderBottomWidth: 2, margin: 5, borderColor: 'green', borderRadius: 0, paddingStart: 100, },
    butoonajout: { width: 120, height: 50, borderwidth: 0, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', borderRadius: 10, margin: 9 },
    butoonannuler: { width: 120, height: 50, borderwidth: 0, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center', borderRadius: 10, margin: 9 },
    textajout: { color: 'white', fontSize: 15, fontWeight: 'bold' },
    textannuler: { color: 'white', fontSize: 15, fontWeight: 'bold' },
    textinputajoutInvalide: { width: 250, height: 40, borderBottomWidth: 2, margin: 5, borderColor: 'red', borderRadius: 0, paddingStart: 100, },
    row:{flexDirection:'row', marginTop:10},
    option:{
        width:300, 
        height:60, 
        borderwidth:1, 
        backgroundColor:'#6823C1', 
        alignItems:'center', 
        justifyContent:'center',
        marginVertical:20,},
    titre:{
        fontSize:25,
        color:'blue',
        fontWeight:'bold',
        marginBottom:25,
    },

    text1:{
        color:'white',
        fontSize: 18,
    },
    ligneliste:{
        backgroundColor:'#6097DD',
        // borderBottomWidth:2,
        margin:2,
        width:'96%',
        flexDirection:'row',
        height:50,
        alignItems:'center',
        padding:5,
    },
    view:{
        flex:1,
        paddingTop:10,
    },
    textId:{
        width:50,
        fontSize:15,
        fontWeight:'bold',
        marginStart:5,
    },
    textNom:{
        width:100,
        fontSize:15,
        fontWeight:'bold',
    },
    logo:{
        width:35, 
        height:35,
        margin:5,
    },
    enteteliste:{
        backgroundColor:'#2069C7',
        // borderBottomWidth:2,
        margin:4,
        width:'96%',
        flexDirection:'row',
        height:50,
        alignItems:'center',
        padding:5,
    },
    enteteId:{
        width:50,
        fontSize:18,
        fontWeight:'bold',
        marginStart:50,
    },
    enteteNom:{
        width:100,
        fontSize:18,
        fontWeight:'bold',
    },
    
});

module.exports = styles;