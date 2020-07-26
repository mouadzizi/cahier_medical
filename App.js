import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Home from './src/pages/Home';
import Places from './src/pages/Places';
import Profil from './src/pages/Profil';
import MedicalAct from './src/pages/ActMedical';

import {auth} from './src/data/Firebase';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const StackNav = createStackNavigator();
const Container = createStackNavigator();
const TabNav = createMaterialTopTabNavigator();


{/* sign out function with firebase*/}
function signOutUser() {
        
  auth.signOut()
  .catch(err=>Alert.alert('Error',err.message))
}


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
      <TabNav.Screen name="Home" component={Home} options={{ title: 'Home' }} /> 
      <TabNav.Screen name="Medical Act" component={MedicalAct}  options={{ title: ' Med Act ' }}/>
      <TabNav.Screen name="Places" component={Places}  options={{ title: ' Places' }}/>
      <TabNav.Screen name="Profil" component={Profil}  options={{ title: ' Profil ' }}/>
    </TabNav.Navigator>
  );
}

function MyContainer(){
  return(
    <Container.Navigator initialRouteName="MyTabs">

    <Container.Screen name="MyTabs" component={MyTabs}

    options={{ title: 'Carnet Medical',
               headerTitleAlign: 'center',
               headerStyle: {
               backgroundColor: '#3498DB'},
               headerTintColor: '#fff',
               headerTitleStyle:{
               fontWeight: 'bold',
               },
               headerLeft: () => (
                <TouchableOpacity
                style={{marginLeft: 20}}
                onPress={()=>signOutUser()}>
                <FontAwesome5
                name='power-off'
                size={20}
                color='#fff'
                />
                </TouchableOpacity> ),
              headerRight:()=>(
                  <Text 
                    style={{color:'white',fontWeight:'bold',fontSize:15}}
                  > @{auth.currentUser.displayName} </Text>
                ),
              headerRightContainerStyle:{
                  paddingRight:10
                }
    }}/>
    </Container.Navigator>
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
      <Authentication /> : <MyContainer /> 
    }

      </NavigationContainer>
  );
}
