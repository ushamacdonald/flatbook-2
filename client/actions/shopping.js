import request from 'superagent'

export const receiveShopping = (shoppinglist) => {
  return {
    type: 'RECEIVE_SHOPPING',
    shoppinglist
  }
}

export function getShopping (flat_id) {
  return (dispatch) => {
    request
      .get('api/shoppinglist/' + flat_id)
      .end((err, res) => {
        console.log(res.body);
        if (err) console.log(err.message)
        dispatch(receiveShopping(res.body))
      })
  }
}
