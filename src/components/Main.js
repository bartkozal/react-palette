import React, { Component } from 'react'
import Sidebar from './Sidebar'
import ColorEditor from './ColorEditor'
import '../styles/Main.css'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Sidebar palettes={this.props.palettes} />
        <ColorEditor palette={this.props.activePalette} />
      </div>
    )
  }
}

export default Main
