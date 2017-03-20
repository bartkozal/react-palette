import { isEqual } from 'lodash'

let activePalette = null
let palettes = null

export default (state, action) => {
  switch (action.type) {
    case 'SELECT_PALETTE':
      return {
        ...state,
        activePalette: action.payload.palette
      }
    case 'CREATE_PALETTE':
      return {
        palettes: state.palettes.concat([action.payload.palette]),
        activePalette: action.payload.palette
      }
    case 'ADD_COLOR':
      palettes = state.palettes.map(palette => {
        if (isEqual(palette, state.activePalette)) {
          activePalette = {
            colors: palette.colors.concat([action.payload.color]),
            activeColor: action.payload.color
          }
          return activePalette
        }
        return palette
      })
      return {
        palettes,
        activePalette
      }
    case 'REMOVE_COLOR':
      palettes = state.palettes.map(palette => {
        if (isEqual(palette, state.activePalette)) {
          const colors = palette.colors.filter(color => {
            return color !== action.payload.color
          })
          activePalette = {
            colors,
            activeColor: colors[0]
          }
          return activePalette
        }
        return palette
      })
      return {
        palettes,
        activePalette
      }
    default:
      return state
  }
}
