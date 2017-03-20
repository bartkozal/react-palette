import React, { Component } from 'react';
import Palette from './Palette';
import '../styles/ColorEditor.css';

class ColorEditor extends Component {
  render() {
    return this.props.palette ? (
      <div className="ColorEditor">
        <header className="ColorEditor-header">
          <a href="#">
            <i className="icon ion-close"></i>
          </a>
          {this.props.palette.activeColor}
          <a href="#">
            <i className="icon ion-plus"></i>
          </a>
        </header>
        <Palette colors={this.props.palette.colors}
          active={this.props.palette.activeColor} />
        <div className="ColorEditor-sliders">
          <label>Hue <span>3</span></label>
          <input min="0" max="360" defaultValue="3" type="range" />
          <label>Saturation <span>79</span></label>
          <input min="0" max="100" defaultValue="79" type="range" />
          <label>Brightness <span>100</span></label>
          <input min="0" max="100" defaultValue="100" type="range" />
        </div>
      </div>
    ) : <div></div>
  }
}

export default ColorEditor;
