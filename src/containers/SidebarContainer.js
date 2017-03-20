import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'
import * as actions from '../actions/palette'

const mapStateToProps = state => {
  return {
    palettes: state.palettes,
    active: state.activePalette
  }
}

const mapDispatchToProps = dispatch => {
  return {
    select (palette) {
      dispatch(actions.select(palette))
    },
    create () {
      dispatch(actions.create())
    }
  }
}

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer
