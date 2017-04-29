'use strict'

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
import { Icon } from 'react-native-elements';

const accessToken = 'pk.eyJ1IjoiYWxleG1mMyIsImEiOiJjajF2OHF6NHAwMDEwMnFuenphY3o5cG13In0.awCN0YN3--_wVfp7r-xjgA';
const mapStyle = 'mapbox://styles/mapbox/streets-v10';

Mapbox.setAccessToken(accessToken);

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
  map: {
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
  }
});


export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 11,
      center: {
        latitude: 40.72052634,
        longitude: -73.97686958312988
      }

    }
  }
  onLongPress = (location) => {
    console.log('long press', location);
  }

  onTap = (location) => {
    console.log('tap', location);
  }
  onCameraSelect = () => {
    this.props.navigation.navigate('CameraScreen');
  }
  render() {
    return(
      <View style={styles.wrapper}>
        <View style={styles.map}>
          <MapView
            ref={map => { this._map = map; }}
            style={styles.map}
            initialCenterCoordinate={this.state.center}
            initialZoomLevel={this.state.zoom}
            initialDirection={0}
            rotateEnabled={true}
            scrollEnabled={true}
            zoomEnabled={true}
            showsUserLocation={false}
            styleURL={mapStyle}
            // onRegionDidChange={this.onRegionDidChange}
            // onRegionWillChange={this.onRegionWillChange}
            onLongPress={this.onLongPress}
            onTap={this.onTap}
          />
        </View>
        <View style={styles.containerBtns}>
          <View style={styles.container}>
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
