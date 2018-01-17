//import files
import React from 'react';
import {Text,AppRegistry,View} from 'react-native';
import Header from './src/resources/Header'
import AlbumList from './src/resources/AlbumLists'
//create a component

const App=()=>
    (
    <View>
    <Header headerText={'albums'}/>
    <AlbumList/>
    </View>
);

//render the component

AppRegistry.registerComponent('example1',()=>App);