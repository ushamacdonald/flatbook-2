function noticeboard (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_NOTICEBOARD':
      return [...action.noticeboard]
    default:
      return state
  }
}

export default noticeboard
