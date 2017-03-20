export default (state, action) => {
  switch (action.type) {
    case 'SELECT_PALETTE':
      state = {
        ...state,
        activePalette: action.payload.palette
      }
      return state
    case 'CREATE_PALETTE':
      state = {
        palettes: state.palettes.concat([action.payload.palette]),
        activePalette: action.payload.palette
      }
      return state
    default:
      return state
  }
}
