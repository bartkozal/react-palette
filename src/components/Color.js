import React, { Component } from 'react';

class Color extends Component {
  render() {
    return (
      <div>
        <header>
          <a href="#">Remove color</a>
          Name
          <a href="#">Add color</a>
        </header>
        <div>Red, Yellow, White, Grey</div>
        <div>
          Hue
            <input type="range" />
          Saturation
            <input type="range" />
          Lightness
            <input type="range" />
        </div>
        <a href="#">Remove color</a>
      </div>
    );
  }
}

export default Color;
