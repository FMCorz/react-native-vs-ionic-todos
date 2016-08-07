import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import TodoApp from './todoapp';

class rn extends Component {
  render() {
    return (
      <TodoApp />
    );
  }
}

AppRegistry.registerComponent('rn', () => rn);
