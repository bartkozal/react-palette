import React, { Component } from 'react';
import Palette from './Palette';
import '../css/Color.css';

class Color extends Component {
  render() {
    return (
      <div className="Color">
        <header className="Color-header">
          <a href="#">
            <i className="icon ion-close"></i>
          </a>
          #ff4136
          <a href="#">
            <i className="icon ion-plus"></i>
          </a>
        </header>
        <Palette colors={['#ff4136', '#ffdc00', '#dddddd', '#aaaaaa']} />
        <div className="Color-sliders">
          <label>Hue <span>3</span></label>
          <input min="0" max="360" value="3" type="range" />
          <label>Saturation <span>79</span></label>
          <input min="0" max="100" value="79" type="range" />
          <label>Brightness <span>100</span></label>
          <input min="0" max="100" value="100" type="range" />
        </div>
      </div>
    );
  }
}

export default Color;
