import React from 'react';
import { StackNavigator } from 'react-navigation';

import {
  Text,
  StyleSheet
} from 'react-native';
import HomeScreen from '../screens/Home';
import CameraScreen from '../screens/Camera';
import MapScreen from '../screens/Map';

const styles = StyleSheet.create({
  icontext: {
    color: 'grey',
  },
  iconstyle: {
    color: 'grey',
  }
})

export const AppNav = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'HOME'
    })
  },
  MapScreen: {
    screen: MapScreen,
    navigationOptions: ({navigation}) => ({
      title: 'EXPLORE'
    })
  },
  CameraScreen: {
    screen: CameraScreen,
    navigationOptions: ({navigation}) => ({
      title: 'CAPTURE'
    })
  },
});
