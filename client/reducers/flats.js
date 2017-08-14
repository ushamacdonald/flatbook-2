function flats (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_FLATS':
      return [...action.flats]
    default:
      return state
  }
}

export default flats
