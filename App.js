import React, {useState, useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Home from './src/pages/Home';
import Profil from './src/pages/Profil';

import {auth, db} from './src/data/Firebase';

const StackNav = createStackNavigator();
const TabNav = createMaterialTopTabNavigator();

function Authentication(){
return(

  <StackNav.Navigator>
    <StackNav.Screen name="SignIn" component={SignIn} 
    options={{ title: 'SignIn',
               headerTitleAlign: 'center',
               headerStyle: {
               backgroundColor: '#3498DB'},
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',}
    }}/>
    <StackNav.Screen name="SignUp" component={SignUp} 
    options={{ title: 'SignIn',
               headerTitleAlign: 'center',
               headerStyle: {
               backgroundColor: '#3498DB'},
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',}
    }}/>
  </StackNav.Navigator>
);}

function MyTabs() {
  return (
    <TabNav.Navigator>
      <TabNav.Screen name="Home" component={Home} options={{ title: 'Cahier Medical' }} />
      <TabNav.Screen name="Profil" component={Profil}  options={{ title: ' Profil ' }}/>
    </TabNav.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    
    auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        setUser(true)
      }
      else setUser(false)
      
    })
  }, []);

  return (

      <NavigationContainer>
    {
      !user?
      <Authentication /> : <MyTabs /> 
    }

      </NavigationContainer>
  );
}
