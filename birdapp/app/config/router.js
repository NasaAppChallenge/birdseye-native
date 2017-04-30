import React from 'react';
import { StackNavigator } from 'react-navigation';

import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native';
import HomeScreen from '../screens/Home';
import CameraScreen from '../screens/Camera';
import MapScreen from '../screens/Map';
import PhotoScreen from '../screens/Photo';
const styles = StyleSheet.create({
  icontext: {
    color: 'grey',
  },
  iconstyle: {
    color: 'grey',
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  text1: {
    fontSize: 20,
  },
  containerheader: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  }
})

export const AppNav = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      // headerLeft: <View style={styles.containerheader}>
      //               <Text style={styles.text}>BIRDS</Text>
      //               <Text style={styles.text1}>EYE</Text>
      //             </View>,
      title: 'HOME',
      headerStyle: {
        backgroundColor: 'white'
      }
    })
  },
  MapScreen: {
    screen: MapScreen,
    navigationOptions: ({navigation}) => ({
      // headerLeft: <View style={styles.containerheader}>
      //               <Text style={styles.text}>BIRDS</Text>
      //               <Text style={styles.text1}>EYE</Text>
      //             </View>,
      title: 'MAP',
      headerStyle: {
        backgroundColor: 'white'
      }

    })
  },
  CameraScreen: {
    screen: CameraScreen,
    navigationOptions: ({navigation}) => ({
      // headerLeft: <View style={styles.containerheader}>
      //               <Text style={styles.text}>BIRDS</Text>
      //               <Text style={styles.text1}>EYE</Text>
      //             </View>,
      title: 'CAMERA',
      headerStyle: {
        backgroundColor: 'white'
      }

    })
  },
  PhotoScreen: {
    screen: PhotoScreen,
    navigationOptions: ({navigation}) => ({
      // headerLeft: <TouchableHighlight onPress={ () => navigation}>
      //               <View style={styles.containerheader}>
      //                   <Text style={styles.text}>BIRDS</Text>
      //                   <Text style={styles.text1}>EYE</Text>
      //               </View>
      //             </TouchableHighlight>,
      title: 'PHOTO',
      headerStyle: {
        backgroundColor: 'white'
      }
    })
  }
});
