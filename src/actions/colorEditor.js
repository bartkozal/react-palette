import randomColor from 'random-color'

export const add = () => {
  return {
    type: 'ADD_COLOR',
    payload: {
      color: randomColor().hexString()
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
