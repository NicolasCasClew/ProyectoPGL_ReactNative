import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { ToastAndroid } from 'react-native';
import { useEffect, useRef, useState } from 'react';


export default function App() {

  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };


    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);

  };


  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };


    let savePhoto = () => {
      try {
        MediaLibrary.saveToLibraryAsync(photo.uri).then(() => 
          {
            setPhoto(undefined);
          }
        );
      } catch (error) {
        console.disableYellowBox = true
        console.disableRedBox = true

        ToastAndroid.show('Not working', ToastAndroid.SHORT);
      };
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        <View style= {styles.buttonContainer}>
        <TouchableOpacity onPress={sharePic} style={styles.button}>
          <Icon style={styles.buttonContainer} name="share" size={65} />
          </TouchableOpacity>
        {hasMediaLibraryPermission ? <TouchableOpacity onPress={savePhoto} style={styles.button}>
          <Icon style={styles.buttonContainer} name="save" size={65} />
          </TouchableOpacity> : undefined}
          <TouchableOpacity onPress={() => setPhoto(undefined)} style={styles.button}>
          <Icon style={styles.buttonContainer} name="trash" size={65} />
          </TouchableOpacity>
 
        </View>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <SafeAreaView style={styles.buttonContainer}>
        <View >
          <TouchableOpacity onPress={takePic} style={styles.buttonContainer}>
          <Icon style={styles.cameraButton} name="scan-circle" size={65} />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row-reverse',
    //alignSelf: 'flex-end',
    //flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor:'white',
  },
  buttonContainer: {

   justifyContent: 'space-around',
    flexDirection: 'row-reverse',
    backgroundColor: 'white',
    alignSelf: 'center',
    alignContent: 'center',
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  },
  button:{
    marginVertical:10,
    borderRadius:5,
    marginHorizontal:10,
    borderColor: 'black',
    borderWidth: 3,
  },
  cameraButton:{
   
    borderRadius:90,

    borderColor: 'black',
    borderWidth: 0,
  },
});

/*
return (
    <View style={styles.container}>
      <Text>Paaaco</Text>
      <StatusBar style="auto" />
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
});
*/