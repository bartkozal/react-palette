import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const palettes = [
  {
    colors: ['#ff4136', '#ffdc00', '#dddddd', '#aaaaaa'],
    activeColor: '#ff4136'
  },
  {
    colors: ['#b10dc9', '#7fdbff'],
    activeColor: '#b10dc9'
  }
]

const activePalette = {
  colors: ['#ff4136', '#ffdc00', '#dddddd', '#aaaaaa'],
  activeColor: '#ff4136'
}

export default createStore(
  rootReducer,
  { palettes, activePalette },
  applyMiddleware(createLogger())
)
