import { createStore } from 'redux'
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
];
const activePalette = palettes.first

export default createStore(rootReducer, { palettes, activePalette })
