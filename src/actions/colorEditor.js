import randomColor from 'random-color'

export const add = () => {
  return {
    type: 'ADD_COLOR',
    payload: {
      color: randomColor().hexString().toLowerCase()
    }
  }
}

export const remove = (color) => {
  return {
    type: 'REMOVE_COLOR',
    payload: {
      color
    }
  }
}

export const updateHue = (hue) => {
  return {
    type: 'UPDATE_HUE',
    payload: {
      hue
    }
  }
}

export const updateSaturation = (saturation) => {
  return {
    type: 'UPDATE_SATURATION',
    payload: {
      saturation
    }
  }
}

export const updateLightness = (lightness) => {
  return {
    type: 'UPDATE_LIGHTNESS',
    payload: {
      lightness
    }
  }
}
