import React, { Component } from 'react';
import '../styles/Palette.css';

class Palette extends Component {
  render () {
    const width = `${100 / this.props.colors.length}%`
    const colorsList = this.props.colors.map((backgroundColor, index) => {
      const isActive = this.props.active === backgroundColor
      return (
        <div className={`Palette-box`} key={ index } style={{ width, backgroundColor }}>
          { isActive &&
            <i className="icon ion-arrow-up-b Palette-arrow"></i> }
        </div>
      )
    })

    return (
      <div className="Palette">
        { colorsList }
      </div>
    )
  }
}

export default Palette
