import React, { Component } from 'react'
import Palette from './Palette'
import { isEqual } from 'lodash'
import '../styles/Sidebar.css'
import '../styles/SidebarPalette.css'

class Sidebar extends Component {
  render () {
    const palettes = this.props.palettes.map((palette, index) => {
      const isActive = isEqual(palette, this.props.active)
      const className = isActive ? 'SidebarPalette SidebarPalette-active' : 'SidebarPalette'

      return (
        <div key={index} className={className} onClick={
          e => { this.props.select(palette) }}>
          <Palette colors={palette.colors} />
        </div>
      )
    })

    return (
      <div className="Sidebar">
        { palettes }
        <a href="#" onClick={e => {
          e.preventDefault()
          this.props.create()
          }}>
          <i className="icon ion-plus"></i>
        </a>
      </div>
    )
  }
}

export default Sidebar
