import randomColor from 'random-color'

export const select = palette => {
  return {
    type: 'SELECT_PALETTE',
    payload: {
      palette
    }
  }
}

export const create = () => {
  const color = randomColor().hexString()
  const palette = {
    colors: [color],
    activeColor: color
  }

  return {
    type: 'CREATE_PALETTE',
    payload: {
      palette
    }
  }
}

export const setActiveColor = color => {
  return {
    type: 'SELECT_COLOR',
    payload: {
      color
    }
  }
}
