import React from 'react';
import {View, Text} from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle';

export default function Home(){
    return(
        <View style={GlobalStyle.container}>
            <Text>Hello world</Text>
        </View>
    );
}
