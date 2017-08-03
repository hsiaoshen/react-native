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
  View,
  Button,
  FlatList,
  SectionList
} from 'react-native';

// react-navigation
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Hello',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <Text>Hello, Chat App!</Text>
      <Button
        onPress={() => navigate('Chat')}
        title="Chat with Lucy"
        />
      </View>
 );
  }
}
class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});


// 使用长列表FlatList

class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: '孙权'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: '权'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}


//SectionList 类似手机通讯录中
class SectionListBasics extends Component {
   render() {
     return (
       <View style={styles.container}>
         <SectionList
           sections={[
             {title: 'D', data: ['Devin']},
             {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
           ]}
           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
         />
       </View>
     );
   }
 }

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomWidth:2,
    borderStyle:'solid',
    borderBottomColor: 'rgb(155, 92, 252)',
  },
  sectionHeader: {
           paddingTop: 2,
           paddingLeft: 10,
           paddingRight: 10,
           paddingBottom: 2,
           fontSize: 14,
           fontWeight: 'bold',
           backgroundColor: 'rgba(247,247,247,1.0)',
  },
})





AppRegistry.registerComponent('SimpleApp', () => SectionListBasics);
