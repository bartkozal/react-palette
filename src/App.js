import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Color from './components/Color';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Color />
      </div>
    );
  }
}

export default App;
