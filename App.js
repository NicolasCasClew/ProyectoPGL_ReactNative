import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';

const uri = 'https://w0.peakpx.com/wallpaper/514/237/HD-wallpaper-carbon-fiber-929-abstract-black-gray-red.jpg'
const perfil = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'

export default function App() {
  return (
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
        <Image source={{uri: perfil}} style={[styles.perfilfoto, styles.dropShadow]}/>        
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color:'white', marginTop:20}}>Correo</Text>
        <TextInput style={styles.input} placeholder="Correo"></TextInput>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color:'white',marginTop:20}}>Contraseña</Text>
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true}></TextInput>
      </View>
</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: 'rgba(0, 0, 5, 0.9)',
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
    marginVertical: 10,
    backgroundColor:'#ffffff90'
  }
});
