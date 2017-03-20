import { isEqual } from 'lodash'
import hslToHex from 'hsl-to-hex'
import hexToHsl from 'hex-to-hsl'

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
          const index = palette.colors.indexOf(action.payload.color)
          const newIndex = index === 0 ? 0 : index - 1
          const colors = palette.colors.filter(color => {
            return color !== action.payload.color
          })
          activePalette = {
            colors,
            activeColor: colors[newIndex]
          }
          return activePalette
        }
        return palette
      })
      return {
        palettes,
        activePalette
      }
    case 'UPDATE_HUE':
      palettes = state.palettes.map(palette => {
        if (isEqual(palette, state.activePalette)) {
          const hsl = hexToHsl(state.activePalette.activeColor)
          const activeColor = hslToHex(action.payload.hue, hsl[1], hsl[2])
          const colors = palette.colors.map(color => {
            if (color === state.activePalette.activeColor) {
              return activeColor
            }
            return color
          })
          activePalette = {
            colors,
            activeColor
          }
          return activePalette
        }
        return palette
      })
      return {
        palettes,
        activePalette
      }
    case 'UPDATE_SATURATION':
      palettes = state.palettes.map(palette => {
        if (isEqual(palette, state.activePalette)) {
          const hsl = hexToHsl(state.activePalette.activeColor)
          const activeColor = hslToHex(hsl[0], action.payload.saturation, hsl[2])
          const colors = palette.colors.map(color => {
            if (color === state.activePalette.activeColor) {
              return activeColor
            }
            return color
          })
          activePalette = {
            colors,
            activeColor
          }
          return activePalette
        }
        return palette
      })
      return {
        palettes,
        activePalette
      }
    case 'UPDATE_LIGHTNESS':
      palettes = state.palettes.map(palette => {
        if (isEqual(palette, state.activePalette)) {
          const hsl = hexToHsl(state.activePalette.activeColor)
          const activeColor = hslToHex(hsl[0], hsl[1], action.payload.lightness)
          const colors = palette.colors.map(color => {
            if (color === state.activePalette.activeColor) {
              return activeColor
            }
            return color
          })
          activePalette = {
            colors,
            activeColor
          }
          return activePalette
        }
        return palette
      })
      return {
        palettes,
        activePalette
      }
    case 'SELECT_COLOR':
      palettes = state.palettes.map(palette => {
        if (isEqual(palette, state.activePalette)) {
          activePalette = {
            colors: palette.colors,
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
    default:
      return state
  }
}
