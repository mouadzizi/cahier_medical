import React, {useState} from 'react';
import {View} from 'react-native';
import { FAB } from 'react-native-paper';

import {GlobalStyle} from '../style/GlobalStyle';

export default function ActMedical(){



    return(
        <View style={GlobalStyle.container}>
           
           <FAB
            style={GlobalStyle.fab}
            color='white'
            icon="plus"
            onPress={() => console.log('Pressed')}/>

        </View>
    );
}
