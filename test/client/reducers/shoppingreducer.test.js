import test from 'ava'

import reducer from '../../../client/reducers/shoppinglist'

test('initial state is an empty array', t => {
  const expected = []
  const actual = reducer(undefined, {})
  t.deepEqual(expected, actual)
})

test('add shopping', t => {
  const action = {type: 'ADD_SHOPPING', shoppinglist: 'milk'}

  let nextState = reducer([], action)
  t.deepEqual(nextState, ['milk'])

  action.shoppinglist = 'bananas'
  nextState = reducer(nextState, action)
  t.deepEqual(nextState,['milk', 'bananas'])
})
