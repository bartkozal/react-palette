import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const palettes = [
  {
    colors: ['#FF4136', '#FFDC00', '#DDDDDD', '#AAAAAA'],
    activeColor: '#FF4136'
  },
  {
    colors: ['#B10DC9', '#7fDBff'],
    activeColor: '#B10DC9'
  }
]

const activePalette = {
  colors: ['#FF4136', '#FFDC00', '#DDDDDD', '#AAAAAA'],
  activeColor: '#FF4136'
}

export default createStore(
  rootReducer,
  { palettes, activePalette },
  applyMiddleware(createLogger())
)
