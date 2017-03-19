import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Color from './components/Color';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: [
        {
          id: 1,
          colors: ['#ff4136', '#ffdc00', '#dddddd', '#aaaaaa'],
          activeColor: '#ff4136'
        },
        {
          id: 2,
          colors: ['#b10dc9', '#7fdbff'],
          activeColor: '#b10dc9'
        }
      ],
      activePaletteId: 1
    };
  }

  render() {
    const activePalette = this.state.palettes.find(pallete => {
      return pallete.id === this.state.activePaletteId;
    })

    return (
      <div className="App">
        <Sidebar palettes={this.state.palettes} />
        <Color palette={activePalette} />
      </div>
    );
  }
}

export default App;
