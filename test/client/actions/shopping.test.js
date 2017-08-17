import test from 'ava'
import nock from 'nock'

import {addShopping, postShopping} from '../../../client/actions/shopping'

test.cb('postShopping is working', t => {
  const item = {flat_id:1, item: 'milk'}
  nock('http://localhost:80')
    .post('/api/shoppinglist/')
    .reply(201, {...item, id: 1})

  postShopping(item)((actual) => {
    t.is(actual.shoppinglist.id, 1)
    t.is(actual.shoppinglist.item, 'milk')
    t.is(actual.type, 'ADD_SHOPPING')
    t.end()
  })
})
