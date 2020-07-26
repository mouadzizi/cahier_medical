import React, {useState} from 'react';
import { Searchbar } from 'react-native-paper';

import {GlobalStyle} from '../style/GlobalStyle';

export default function Places(){
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return(
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}/>
    );
}