'use strict'
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';
import { Icon } from 'react-native-elements';
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImage: {
    flex: 1
  },
  containerBtns: {
    bottom: 0
  },
  button: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ededed',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  buttonText: {
    color: 'grey',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: deviceWidth,
    height: 100
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
      <View style={styles.wrapper}>
        <View style={styles.containerImage}>
          <Image
            style={styles.image}
            source={require('../res/first_screen.png')}
            />
        </View>
        <View style={styles.containerBtns}>
          <View style={styles.container}>
            <TouchableHighlight
                    onPress={() => this.onMapSelect()}
                    style={styles.button}>
                      <View style={styles.container}>
                        <Icon iconStyle={styles.icon} name="pin-drop" color={'grey'} size={35} />
                        <Text style={styles.buttonText}>EXPLORE</Text>
                      </View>
            </TouchableHighlight>
            <TouchableHighlight
                    onPress={() => this.onCameraSelect()}
                    style={styles.button}>
                      <View style={styles.container}>
                        <Icon iconStyle={styles.icon} name="photo-camera" color={'grey'} size={35} />
                        <Text style={styles.buttonText}>CAPTURE</Text>
                      </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
