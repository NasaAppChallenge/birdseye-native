import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import CameraScreen from '../screens/Camera';
import MapScreen from '../screens/Map';

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
  MapScreen: {
    screen: MapScreen,
    navigationOptions: ({navigation}) => ({
      title: "Map"
    })
  }
});
