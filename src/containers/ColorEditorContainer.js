import { connect } from 'react-redux'
import ColorEditor from '../components/ColorEditor'

const mapStateToProps = state => {
  return {
    palette: state.activePalette
  }
}

const ColorEditorContainer = connect(mapStateToProps)(ColorEditor)

export default ColorEditorContainer
