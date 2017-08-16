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

export const addNoticeboard = (noticeboard) => {
  return {
    type: 'ADD_NOTICEBOARD',
    noticeboard
  }
}

export function postNoticeboard (noticeboard) {
  return (dispatch) => {
    request
      .post('api/noticeboard/')
      .send(noticeboard)
      .end((err, res) => {
        if (err) console.log(err.message)
        console.log(res.body);
        dispatch(addNoticeboard(res.body))
  })
  }
}
