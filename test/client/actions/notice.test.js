import test from 'ava'
import nock from 'nock'

import {addNoticeboard, postNoticeboard} from '../../../client/actions/noticeboard'

test.cb('postNoticeboard is working', t => {
  const message = {flat_id:1, message: 'this is a message'}
  nock('http://localhost:80')
    .post('/api/noticeboard/')
    .reply(200, {...message, id: 1})

  postNoticeboard(message)((actual) => {
    t.is(actual.noticeboard.id, 1)
    t.is(actual.noticeboard.message, 'this is a message')
    t.is(actual.type, 'ADD_NOTICEBOARD')
    t.end()
  })

})
