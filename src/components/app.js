import React, { Component } from 'react';
import NavigationBar from './component_navbar'
import Content from './component_content'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Content />
      </div>
    );
  }
}
