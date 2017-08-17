import test from 'ava'

import reducer from '../../../client/reducers/noticeboard'

test('initial state is an empty array', t => {
  const expected = []
  const actual = reducer(undefined, {})
  t.deepEqual(expected, actual)
})
