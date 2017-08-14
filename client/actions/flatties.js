import request from 'superagent'

export const receiveFlatties = (flatties) => {
  return {
    type: 'RECEIVE_FLATTIES',
    flatties
  }
}

export function getFlatties (flat_id) {
  return (dispatch) => {
    request
      .get('api/flatties/' + flat_id)
      .end((err, res) => {
        if (err) console.log(err.message)
        dispatch(receiveFlatties(res.body))
      })
  }
}
