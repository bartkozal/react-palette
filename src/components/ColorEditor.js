import React, { Component } from 'react'
import PaletteContainer from '../containers/PaletteContainer'
import hexToHsl from 'hex-to-hsl'
import '../styles/ColorEditor.css'

class ColorEditor extends Component {
  render () {
    const hsl = hexToHsl(this.props.palette.activeColor)
    const colorSpace = {
      hue: hsl[0],
      saturation: hsl[1],
      lightness: hsl[2]
    }

    return this.props.palette ? (
      <div className="ColorEditor">
        <header className="ColorEditor-header">
          <a href="#" onClick={e => {
            e.preventDefault()
            this.props.remove(this.props.palette.activeColor)
            }}>
            <i className="icon ion-close"></i>
          </a>
          {this.props.palette.activeColor}
          <a href="#" onClick={e => {
            e.preventDefault()
            this.props.add()
            }}>
            <i className="icon ion-plus"></i>
          </a>
        </header>
        <PaletteContainer />
        <div className="ColorEditor-sliders">
          <label>Hue <span>{colorSpace.hue}</span></label>
          <input min="0" max="360" value={colorSpace.hue} onChange={e => this.props.updateHue(e.target.value)} type="range" />
          <label>Saturation <span>{colorSpace.saturation}</span></label>
          <input min="0" max="100" value={colorSpace.saturation} onChange={e => this.props.updateSaturation(e.target.value)} type="range" />
          <label>Lightness <span>{colorSpace.lightness}</span></label>
          <input min="0" max="100" value={colorSpace.lightness} onChange={e => this.props.updateLightness(e.target.value)} type="range" />
        </div>
      </div>
    ) : <div></div>
  }
}

export default ColorEditor
