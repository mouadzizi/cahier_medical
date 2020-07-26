import React from 'react'
import { StyleSheet} from 'react-native'


export const GlobalStyle = StyleSheet.create({

    container:{
        flex: 1,
    },
    button:{
        backgroundColor: '#3498DB',
        height: 50,
        marginTop: 20,
        borderRadius: 50,
        textAlign: "center",
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    },
    fab:{
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
        color: '#fff',
        backgroundColor:'#3498DB',
    },
});
