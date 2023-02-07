import React, { useEffect } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, StyleSheet, Text, View, ScrollView, ToastAndroid, TouchableOpacity, TextInput, Button } from 'react-native';import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase';
import { initializeApp } from 'firebase/app';
import { auth } from '../firebase-config'; //C:\Users\nicom\Desktop\Ciclo\ReactProyects\Proyecto_PGL\firebase-config.js

const uri = 'https://w0.peakpx.com/wallpaper/514/237/HD-wallpaper-carbon-fiber-929-abstract-black-gray-red.jpg'
const perfil = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
const Stack = createNativeStackNavigator();





const LoginScreen = ()=>{
    const [emai, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
  
    const navigation = useNavigation()
    //const app = initializeApp(firebaseConfig)
    //const auth = getAuth(app)
   /** 
    useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged(user =>{
        if(user){
          navigation.navigate("Home")
        }
      })
      return unsubscribe
    },[])
  
  */
   
    const handleCreateAccount = () =>{
      console.log('Tamo dentro')
      auth.
      createUserWithEmailAndPassword(emai, password)
      .then(userCredentials => {
        ToastAndroid.showWithGravity('Cuenta Creada', ToastAndroid.SHORT);
        console.log('Account created')
        const user = userCredentials.user;
        console.log('Registrado con correo : ',user.emai)
        navigation.navigate("Home")
      })
      .catch(error => {
        console.log(error)
      })
    }
    const handleLogin = () =>{
      console.log('Tamo dentro')
      auth.
      signInWithEmailAndPassword(emai, password)
      .then(userCredentials => {
        console.log('Account Logged In')
        ToastAndroid.show('Sesion iniciada', ToastAndroid.SHORT);
        const user = userCredentials.user;
        console.log('Sesion iniciada con correo = ',user.emai)
        navigation.navigate("Home")
      })
      .catch(error => {
        console.log(error)
      })
    }
  
    return(
      <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]}/>
      <ScrollView contentContainerStyle= {{
        flex:1,
        width:'100%',
        height:'100%',
        alignItems : 'center',
        justifyContent:'center',
      }}>
          <View style={styles.login}>
            <View style={styles.fotocont}>
            <Image resizeMode="cover" source={{uri: perfil}} style={[styles.perfilfoto]}/> 
            
            <Icon style={styles.close} name="images" size={25} />
  
            </View>
        
               
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color:'white', marginTop:20}}>Correo</Text>
        <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Correo"></TextInput>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color:'white',marginTop:20}}>Contraseña</Text>
        <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="Contraseña" secureTextEntry={true}></TextInput>
        <View style={{marginBottom: 60}}></View>
      </View>
      <TouchableOpacity
      onPress={handleLogin}
       style={[styles.button, {backgroundColor: '#ffffff90'}]}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'white', justifyContent:'center'}}>Inicia Sesion</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={handleCreateAccount} 
      style={styles.button}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'white', justifyContent:'center'}}>Crear Cuenta</Text>
      </TouchableOpacity>
  </View>
      </ScrollView>
    </View>
    );
}

export default LoginScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fotocont: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      width: '100%',
      height: '100%',
      resizeMode: 'cover'
    },
    login:{
      width:350,
      height:600,
      borderColor: '#690000',
      borderRadius: 10,
      borderWidth: 3,
      padding: 10,
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 5, 0.8)',
    },
    perfilfoto:{
      
      width:100,
      height:100,
      borderRadius: 25,
      borderColor: '#690000',
      borderWidth: 4,
      marginVertical: 30,
    },
    dropShadow:{
  
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowRadius: 7,
      elevation: 2,
    },
    input:{
      width:250,
      height:40,
      borderColor:'#690000',
      borderWidth:3,
      borderRadius: 8,
      padding: 10,
      marginTop:5,
      
      backgroundColor:'#ffffff90'
    },
    button:{
      width:200,
      height:60,
      borderRadius: 10,
      backgroundColor: '#ffffff80',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:10,
      borderColor: '#690000',
      borderWidth: 3,
    },
    close: {
      margin: 5,
      position: "absolute",
      top: 35,
      left: 10,
      width: 25,
      height: 25,
      color: "rgba(0, 0, 5, 0.7)"
    },
    closeOnPress: {
      margin: 5,
      position: "absolute",
      top: 35,
      left: 10,
      width: 25,
      height: 25,
      color: "white"
    },
  });