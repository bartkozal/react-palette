import { connect } from 'react-redux'
import Main from '../components/Main'

const App = connect(state => {
  return {
    palettes: state.palettes,
    activePalette: state.activePalette
  }
})(Main)

export default App
