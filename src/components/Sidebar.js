import React, { Component } from 'react';
import Palette from './Palette';
import '../css/Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <Palette colors={['#ff4136', '#ffdc00', '#dddddd', '#aaaaaa']} />
        <Palette colors={['#b10dc9', '#7fdbff']} />
        <a href="#">
          <i className="icon ion-plus"></i>
        </a>
      </div>
    );
  }
}

export default Sidebar;
