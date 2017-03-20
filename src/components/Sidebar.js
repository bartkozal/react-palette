import React, { Component } from 'react'
import Palette from './Palette'
import '../styles/Sidebar.css'

class Sidebar extends Component {
  render() {
    const palettes = this.props.palettes.map((palette, index) => {
      return <Palette key={ index } colors={palette.colors} />;
    })

    return (
      <div className="Sidebar">
        { palettes }
        <a href="#">
          <i className="icon ion-plus"></i>
        </a>
      </div>
    )
  }
}

export default Sidebar
