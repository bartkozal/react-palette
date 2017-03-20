import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'

const mapStateToProps = state => {
  return {
    palettes: state.palettes,
    active: state.activePalette
  }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar)

export default SidebarContainer
