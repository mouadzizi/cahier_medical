import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import { FAB } from 'react-native-paper';

import {GlobalStyle} from '../style/GlobalStyle';

export default function Home(){



    return(
        <View style={GlobalStyle.container}>
           
           <FAB
            style={GlobalStyle.fab}
            small
            icon="calendar-check"
            onPress={() => Alert.alert('add a new opointment')}/>

        </View>
    );
}
