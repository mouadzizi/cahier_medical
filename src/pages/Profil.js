import React from 'react';
import {View, Text} from 'react-native';

import {GlobalStyle} from '../style/GlobalStyle';

export default function Profil(){
    return(
        <View style={GlobalStyle.container}>
            <Text>Hello Profil</Text>
        </View>
    );
}
