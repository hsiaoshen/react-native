/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Blink extends Component {
  constructor(props){
    super(props);
    this.state = {showText: true};
  }

  componentWillMount() {
     this.timer = setInterval(
       () => {this.setState({showText:!this.state.showText})}, 500
     );
   }

  render(){
    var dispaly = this.state.showText ? this.props.text : "";
    return(
      <Text>{dispaly}</Text>
    )
  }
}

export default class kuaishan extends Component {
  render() {
    return (
      <View>
        <Blink text="I LOVE YOU"/>
      </View>
    );
  }
}


AppRegistry.registerComponent('kuaishan', () => kuaishan);
