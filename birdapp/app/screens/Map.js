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
    backgroundColor: '#0066cc',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  buttonText: {
    color: 'white',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    alignItems: 'center',
  }
});


export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 2,
      center: {
        latitude: 37.47111,
        longitude: -122.55111
      },
      userTrackingMode: Mapbox.userTrackingMode.follow,
      annotations: [{
        coordinates: [37.774000, -122.431700],
        type: 'point',
        title: 'This is marker 1',
        subtitle: 'Photographer name:',
        id: 'marker1'
      },
      {
        coordinates: [37.774500, -122.431600],
        type: 'point',
        title: 'This is marker 2',
        subtitle: 'Photographer name:',
        id: 'marker2'
      },
      {
        coordinates: [37.775000, -122.431500],
        type: 'point',
        title: 'This is marker 3',
        subtitle: 'Photographer name:',
        id: 'marker3'
      },
      {
        coordinates: [37.775500, -122.431400],
        type: 'point',
        title: 'This is marker 4',
        subtitle: 'Photographer name:',
        id: 'marker4'
      }]
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
  onChangeUserTrackingMode = (userTrackingMode) => {
    this.setState({ userTrackingMode });
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
            showsUserLocation={true}
            styleURL={mapStyle}
            annotations={this.state.annotations}
            userTrackingMode={this.state.userTrackingMode}
            onChangeUserTrackingMode={this.onChangeUserTrackingMode}
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
                        <Text style={styles.buttonText}>CAMERA</Text>
                      </View>
            </TouchableHighlight>
          </View>
        </View>
    </View>
    )
  }
}
