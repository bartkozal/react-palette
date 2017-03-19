import React, { Component } from 'react';
import Palette from './Palette';
import '../css/Sidebar.css';

class Sidebar extends Component {
  render() {
    const palettes = this.props.palettes.map(palette => {
      return <Palette key={ palette.id } colors={palette.colors} />;
    });

    return (
      <div className="Sidebar">
        { palettes }
        <a href="#">
          <i className="icon ion-plus"></i>
        </a>
      </div>
    );
  }
}

export default Sidebar;
