import request from 'superagent'

export const receiveNoticeboard = (noticeboard) => {
  return {
    type: 'RECEIVE_NOTICEBOARD',
    noticeboard
  }
}

export function getNoticeboard (flat_id) {
  return (dispatch) => {
    request
      .get('api/noticeboard/' + flat_id)
      .end((err, res) => {
        if (err) console.log(err.message)
        dispatch(receiveNoticeboard(res.body))
  })
}
}
