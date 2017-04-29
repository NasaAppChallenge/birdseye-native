'use strict'
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    alignItems: 'center',
    padding: 5,
    margin: 100,
    backgroundColor: 'blue'
  },
  buttonText: {
    color: 'white'

  }
})
export default class HomeScreen extends Component {
  onCameraSelect = () => {
    this.props.navigation.navigate('CameraScreen');
  }
  onMapSelect = () => {
    this.props.navigation.navigate('MapScreen');
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
                onPress={() => this.onCameraSelect()}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Take photo</Text>
                  </View>
        </TouchableHighlight>
        <TouchableHighlight
                onPress={() => this.onMapSelect()}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>View Map</Text>
                  </View>
        </TouchableHighlight>
      </View>
    )
  }
}
