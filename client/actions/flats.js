import request from 'superagent'

export const receiveFlats = (flats) => {
  return {
    type: 'RECEIVE_FLATS',
    flats
  }
}

export function getFlats () {
  return (dispatch) => {
    request
      .get(`/api/flats`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveFlats(res.body))
      })
  }
}
