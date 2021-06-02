import React, { Component} from 'react';
import { Header,Icon } from 'react-native-elements';
import { View, Text, StyeSheet } from 'react-native';

const MyHeader = props => {
  return (
    <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='white'  onPress={() => this.props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: props.title, style: { color: 'yellow', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "darkblue"
    />
  );
};

export default MyHeader;