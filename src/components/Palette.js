import React, { Component } from 'react';
import '../css/Palette.css';

class Palette extends Component {
  render() {
    const width = `${100 / this.props.colors.length}%`;
    const colorsList = this.props.colors.map(backgroundColor => {
      return (
        <div className="Palette-box"
             style={{ width, backgroundColor }}></div>
      );
    });

    return (
      <div className="Palette">
        { colorsList }
      </div>
    );
  }
}

export default Palette;
