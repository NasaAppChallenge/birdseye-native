import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  View
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  image: {
    flex: 1
  }
})

export default class PhotoScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={{uri: this.props.navigation.state.params.picUrl}}
          />
      </View>
    )
  }
}
