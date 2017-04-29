'use strict';
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import RNFetchBlob from 'react-native-fetch-blob';
import { Icon } from 'react-native-elements';

const protocol = 'https';
const host = 'birdseye.space';

const api_endpoints = {
  media: 'v1/media',
  observation: 'v1/observations'

}
const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  wrapper: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'stretch'
  },
  containerCamera: {
    flex: 1
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBtns: {
    bottom: 0
  },
  button: {
    flex: 1,
    padding: 10,
    backgroundColor: 'green',

  },
  buttonText: {
    color: 'white',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
  }
});

export default class CameraScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      img: null
    }
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.containerCamera}>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            captureTarget={Camera.constants.CaptureTarget.disk}>
          </Camera>
        </View>
        <View style={styles.containerBtns}>
          <View style={styles.container}>
            <TouchableHighlight
                    onPress={this.takePicture.bind(this)}
                    style={styles.button}>
                      <View style={styles.container}>
                        <Icon iconStyle={styles.icon} name="camera" color={'white'} size={35} />
                        <Text style={styles.buttonText}>CAPTURE</Text>
                      </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
  uploadPicture(base64Image) {
    const url = `${protocol}://${host}/${api_endpoints.media}`
    console.log(url);
    RNFetchBlob.fetch('POST', url, {
        'Content-Type' : 'application/octet-stream',
      }, base64Image)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        // error handling ..
      })
  }
  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then(
        (data) => {
          RNFetchBlob.fs.readFile(data.path, 'base64').then(
            (base64data) => {
              let base64Image = `data:image/jpeg;base64,${base64data}`;
              this.setState({img: base64Image});
              //console.log(base64Image);
              this.uploadPicture(base64Image);
            }
          )
        }
    )
      .catch(err => console.error(err));
  }
}
