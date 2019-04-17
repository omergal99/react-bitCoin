import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './assets/css/App.scss';

import Router from './Router';

class App extends Component {
  componentDidMount() {
    if (navigator.onLine) {
      console.log('online');
    } else {
      console.log('offline');
    }
  }
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default observer(App);
