import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import CameraScreen from '../screens/Camera';
import Map from '../screens/Map';

export const AppNav = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Welcome"
    }
  },
  CameraScreen: {
    screen: CameraScreen,
    navigationOptions: ({navigation}) => ({
      title: "Camera"
    })
  },
  Map: {
    screen: Map,
    navigationOptions: ({navigation}) => ({
      title: "Map"
    })
  }
});
