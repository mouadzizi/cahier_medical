import React, {useState} from 'react';
import { Searchbar } from 'react-native-paper';

import { WebView } from 'react-native-webview';
import {GlobalStyle} from '../style/GlobalStyle';
import { View } from 'react-native';

export default function Places(){
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return(
        <View>
            <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}/>

            <WebView 
            source={{ uri: 'https://www.google.com/maps/search/hospitals+tetouan/@35.5962915,-5.383369,13z/data=!3m1!4b1/' }} 
            style={{ marginTop: 20 }}
            />
        </View>
    );
}