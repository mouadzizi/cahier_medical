import React, {useState} from 'react';
import {ScrollView, Text, Alert, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {GlobalStyle} from '../style/GlobalStyle';

import {auth} from '../data/Firebase';

export default function SignIn({navigation}){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    function signIn() {
        auth.signInWithEmailAndPassword(email.trim(), password)
        .catch(error => {
          Alert.alert(error.message)
        });
      }

    return(
      <View style={{margin: 15, background: '#fff'}}>

      <ScrollView>

      <TextInput
        label='Email'
        mode='outlined'
        placeholder='exemple@mail.com'
        theme={{colors: {primary: '#3498DB', background: '#fff' }}}
        style={{marginTop: 50}}
        onChangeText={text => setEmail(text)}
        />
        <TextInput
        label='Password'
        mode='outlined'
        secureTextEntry={true}
        placeholder='your password'
        theme={{colors: {primary: '#3498DB', background: '#fff' }}}
        style={{marginTop: 50}}
        onChangeText={text => setPassword(text)}
        />  

        <TouchableOpacity
        onPress={()=> signIn()}>
        <Text style={GlobalStyle.button}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=> navigation.push('SignUp')}>
          <Text style={GlobalStyle.button}>Sign Up</Text>
        </TouchableOpacity>

        </ScrollView>
        </View>
    );
}