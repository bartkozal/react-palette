import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div>Red, Yellow, White, Grey</div>
          <div>Purple, Blue</div>
          <a href="#">Add palette</a>
        </div>

        <div>
          <header>
            <a href="#">Remove palette</a>
            Name
            <a href="#">Add color</a>
          </header>
          <div>Red, Yellow, White, Grey</div>
          <div>
            Hue
            <input type="range"/>
            Saturation
            <input type="range" />
            Lightness
            <input type="range" />
          </div>
          <a href="#">Remove color</a>
        </div>
      </div>
    );
  }
}

export default App;
