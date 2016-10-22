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

export class footyfinder extends React.Component{

  constructor(){
    super();
    this.state = {
        showModal : false
        }
  }

  toggleModal() {
    this.state.showModal = !this.state.showModal;
    alert(this.state.showModal);
  }

  _renderModal(){
    if(this.state.showModal) {
      return (
          <View style={styles.modal}>
            <Text>Hello Modal!</Text>
            <Text onPress={this.toggleModal.bind(this)}>DAB!</Text>
          </View>
      )
    }
  }

  render() {
    return (
        <View style={styles.container}>
          {this._renderModal()}
          <Text onPress={this.toggleModal.bind(this)}>DAB!</Text>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  modal : {
    padding: 20,
    backgroundColor : 323232,
    flex : 1
  }
});

AppRegistry.registerComponent('footyfinder', () => footyfinder);
