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
        if (err) console.log(err.message)
        dispatch(receiveShopping(res.body))
      })
  }
}

export const addShopping = (shoppinglist) => {
  return {
    type: 'ADD_SHOPPING',
    shoppinglist
  }
}

export function postShopping (shoppinglist) {
  return (dispatch) => {
    request
      .post('api/shoppinglist/')
      .send(shoppinglist)
      .end((err, res) => {
        if (err) console.log(err.message)
        dispatch(addShopping(res.body))
      })
  }
}
