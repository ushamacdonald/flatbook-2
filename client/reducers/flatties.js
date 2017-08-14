function flatties (state= [], action) {
  switch (action.type) {
    case 'RECEIVE_FLATTIES':
      return [...action.flatties]
    default:
      return state
  }
}

export default flatties
