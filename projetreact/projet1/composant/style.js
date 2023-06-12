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
    mdpoublier:{ color: 'red', fontSize:15, },
    textinputmdp: { width: 200, height: 45, borderWidth: 2, margin: 15, borderColor: 'white', borderRadius: 40, paddingStart: 60, },
    butoonauthent: { width: 200, height: 50, borderwidth: 0, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 25, marginTop: 10 },
    butooninscrit: { width: 200, height: 50, borderwidth: 0, backgroundColor: '#3533cd', alignItems: 'center', justifyContent: 'center', borderRadius: 25, marginTop: 10 },
    textLogin: { color: 'black', fontSize: 15, fontWeight: '700', },
    textinscrit: { color: 'white', fontSize: 15, fontWeight: '700', },
});  

module.exports = styles;