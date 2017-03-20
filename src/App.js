import React, { Component } from 'react'
import SidebarContainer from './containers/SidebarContainer'
import ColorEditorContainer from './containers/ColorEditorContainer'
import './styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SidebarContainer />
        <ColorEditorContainer />
      </div>
    )
  }
}

export default App
