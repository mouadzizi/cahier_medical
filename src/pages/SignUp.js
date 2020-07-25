import React, {useState} from 'react';
import {ScrollView, Text, Alert, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {GlobalStyle} from '../style/GlobalStyle';

import {auth, db} from '../data/Firebase';


export default function SignUp({navigation}){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName,setUserName]=useState("")
    const [repeatPassword, setRepeatPassword] = useState("")


    function CreatUser() {
    
        auth.createUserWithEmailAndPassword(email.trim(), password)
        .catch(error => {
          Alert.alert(error.message)
        }).then(userInfo=>{
          return userInfo.user.updateProfile({displayName:userName});
        }).then(()=>{
          db.ref('/user/'+auth.currentUser.uid+'/info').set({
            username:userName,
            email:auth.currentUser.email,
          })
        })
      }


    return(
        <View style={{margin: 15, background: '#fff'}}>

      <ScrollView>
      
      <TextInput
        label='UserName'
        mode='outlined'
        placeholder='Ahmed al kadi'
        theme={{colors: {primary: '#3498DB', background: '#fff' }}}
        style={{marginTop: 50}}
        onChangeText={text => setUserName(text)}
        />

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
        <TextInput
        label='Repeat Password'
        mode='outlined'
        secureTextEntry={true}
        placeholder='Repeat your password'
        theme={{colors: {primary: '#3498DB', background: '#fff' }}}
        style={{marginTop: 50}}
        onChangeText={text => setRepeatPassword(text)}
        />  

        <TouchableOpacity
        onPress={()=> CreatUser()}>
        <Text style={GlobalStyle.button}>Creat an account</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=> navigation.goBack('SignIn')}
        style={{alignSelf: 'center', marginTop: 20}}>
          <Text>You already have an account Sign In</Text>
        </TouchableOpacity>

        </ScrollView>
        </View>
    );
}