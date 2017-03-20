import { connect } from 'react-redux'
import ColorEditor from '../components/ColorEditor'
import * as actions from '../actions/colorEditor'

const mapStateToProps = state => {
  return {
    palette: state.activePalette
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add () {
      dispatch(actions.add())
    },
    remove (color) {
      dispatch(actions.remove(color))
    }
  }
}

const ColorEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorEditor)

export default ColorEditorContainer
