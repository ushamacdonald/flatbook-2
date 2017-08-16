function noticeboard (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_NOTICEBOARD':
      return [...action.noticeboard]
    case 'ADD_NOTICEBOARD':
      return [...state, action.noticeboard]
    default:
      return state
  }
}

export default noticeboard
