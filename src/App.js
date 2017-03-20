import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import Color from './components/Color'
import './styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar palettes={this.props.palettes || []} />
        <Color palette={this.props.activePalette} />
      </div>
    )
  }
}

export default App
