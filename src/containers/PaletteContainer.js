import { connect } from 'react-redux'
import Palette from '../components/Palette'
import * as actions from '../actions/palette'

const mapStateToProps = state => {
  return {
    colors: state.activePalette.colors,
    active: state.activePalette.activeColor
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActiveColor (color) {
      dispatch(actions.setActiveColor(color))
    }
  }
}

const PaletteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Palette)

export default PaletteContainer
