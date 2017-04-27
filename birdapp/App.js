import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { AppNav } from './app/config/router';

export default class App extends Component {
  render() {
    return <AppNav />;
  }
}

AppRegistry.registerComponent('birdapp', () => App);
