'use strict'

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Mapbox, { MapView } from 'react-native-mapbox-gl';

const accessToken = 'pk.eyJ1IjoiYWxleG1mMyIsImEiOiJjajF2OHF6NHAwMDEwMnFuenphY3o5cG13In0.awCN0YN3--_wVfp7r-xjgA';
const mapStyle = 'mapbox://styles/alexmf3/cj1w59evy00262so0kefbbrhg';

Mapbox.setAccessToken(accessToken);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  map: {
    flex: 1
  },
  scrollView: {
    flex: 1
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
  render() {
    return(
      <View style={styles.container}>
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
          styleURL={Mapbox.mapStyles.dark}
          // onRegionDidChange={this.onRegionDidChange}
          // onRegionWillChange={this.onRegionWillChange}
          onLongPress={this.onLongPress}
          onTap={this.onTap}
        />

      </View>
    )
  }
}
