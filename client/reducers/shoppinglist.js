function shoppinglist (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_SHOPPING':
      return [...action.shoppinglist]
    default:
      return state
  }
}

export default shoppinglist
