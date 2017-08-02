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

export default class flex_buju extends Component {
  render() {
    return (
    <View>
      <Text>根节点上放一个元素，不设置宽度</Text>
      <View style={{height: 20, backgroundColor: '#333333'}} />
      <Text>固定宽度的元素上放一个View，不设置宽度</Text>
      <View style={{width: 100}}>
        <View style={{height: 20, backgroundColor: '#333333'}} />
      </View>
<Text>flex的元素上放一个View，不设置宽度</Text>

  <View style={{flexDirection: 'row'}}>
    <View style={{flex: 1}}>
      <View style={{height: 20, backgroundColor: '#333333'}} />
    </View>
      <View style={{flex: 1}}/>
  </View>

  <Text >
     水平居中
 </Text>

 <View style={{height: 100, backgroundColor: '#333333', alignItems: 'center'}}>
   <View style={{backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15}}/>
 </View>

  <Text >
     垂直居中
 </Text>
 <View style={{height: 100, backgroundColor: '#333333', justifyContent: 'center'}}>
   <View style={{backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15}}/>
 </View>

 <Text>
     水平垂直居中
 </Text>
 <View style={{height: 100, backgroundColor: '#333333', alignItems: 'center', justifyContent: 'center'}}>
   <View style={{backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15}}/>
 </View>

 <View style={styles.flexContainer}>
      <View style={styles.cellfixed}>
        <Text style={styles.welcome}>
          fixed
        </Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.welcome}>
          flex
        </Text>
      </View>
      <View style={styles.cellfixed}>
        <Text style={styles.welcome}>
          fixed
        </Text>
      </View>
    </View>

 </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  flexContainer: {
            // 容器需要添加direction才能变成让子元素flex
            flexDirection: 'row'
  },
  cell: {
            flex: 1,
            height: 50,
            backgroundColor: '#aaaaaa'
  },
  cellfixed: {
            height: 50,
            width: 80,
            backgroundColor: '#fefefe'
  }
});

AppRegistry.registerComponent('flex_buju', () => flex_buju);
