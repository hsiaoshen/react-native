/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, {Component} from 'react';
 import {
     View,
     AppRegistry,
     Text,
     Image,
     StyleSheet,
     ListView,
     FlatList
 } from 'react-native';

 class FetchMovie extends React.Component {
     constructor(props) {
         super(props);
         const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {r1 !== r2}});
         this.state = {
             dataSource: ds,
             load:false,
             text:''
         };
     }
     componentWillMount(){
         this.getNet();
     }
     getNet(){
         fetch('https://api.douban.com/v2/movie/coming_soon')//请求地址
         //fetch('https://facebook.github.io/react-native/movies.json')//请求地址
         .then((response) => response.json())//取数据
         .then((responseText) => {//处理数据
             //通过setState()方法重新渲染界面
             console.log("====== " + responseText.title);
             console.log("+++++" + responseText.subjects[0].images.small);
             // console.error("====== " + responseText.title);
             this.setState({
                 //改变加载ListView
                 load: true,
                 //设置数据源刷新界面
                 dataSource: this.state.dataSource.cloneWithRows(responseText.subjects),
             })
         })
         .catch((error) => {
             console.warn(error);
         }).done();
     }


     render() {
         return (
             <View>
                 <ListView
                     dataSource={this.state.dataSource}
                     renderRow={(rowData)=>
                         <View style={styles.row} >
                             <Image
                                 style={{width: 65, height: 100, marginTop: 5 }}
                                 source={{uri: rowData.images.small}}/>
                                 <Text>{rowData.title}</Text>
                             </View>}
                         />
                     </View>
                 );
             }
         }



 class FetchMovie1 extends Component {
   constructor(props){
     super(props);
     this.state = {data:[]}
   }
   componentWillMount(){
     this.getData();
   }
   getData(){
       fetch('https://api.douban.com/v2/movie/coming_soon')
       .then((response) => response.json())
       .then((responseText) => {
          this.setState({data:responseText.subjects})
       })
   }

   render() {
     return (
       <View style={styles.container}>
         <FlatList
           data={this.state.data}
           renderItem={({item}) => {
            //  console.log(item);
            item.key = item.title;
             return(
               <View style={styles.row}>
               <Image
               style={{width: 65, height: 100, marginTop: 5 }}
               source={{uri: item.images.small}}/>
               <Text>{item.title}</Text>
               <Text>{item.key}</Text>
               </View>
             );
           }}
         />
       </View>
     );
   }
 }

 var styles = StyleSheet.create({
           row: {
             flexDirection: 'row',
             justifyContent: 'flex-start',
             padding: 10,
             backgroundColor: '#F6F6F6',
           },
           separator: {
             height: 1,
             backgroundColor: '#CCCCCC',
           },
           thumb: {
             width: 64,
             height: 64,
           },
           text: {
             flex: 1,
         },
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
 });

AppRegistry.registerComponent('fetchMovie', () => FetchMovie1);
