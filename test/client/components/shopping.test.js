import React from 'react'
import test from 'ava'
import {shallow, mount} from 'enzyme'
import sinon from 'sinon'

import '../setup-dom'
import ShoppingListAdd from '../../../client/components/ShoppingListAdd'

test('initial state of item is an empty string', (t) => {
  const wrapper = mount(<ShoppingListAdd match={{params: {flat_id: 1}}} />)
  t.is(wrapper.state().newItem.item, "")
})

test('onChange event of item input is working', (t) => {
  const wrapper = mount(<ShoppingListAdd match={{params: {flat_id: 1}}}/>)
  const event = {target: {name: 'item', value: 'word'}}
  wrapper.find('input[name="item"]').simulate('change', event)
  t.is(wrapper.state().newItem.item, 'word')
})

test('onSubmit is working', (t) => {
  ShoppingListAdd.prototype.addItem = () => {t.pass()}
  const fakeDispatch = sinon.stub()
  const wrapper = mount(<ShoppingListAdd dispatch={fakeDispatch} match={{params: {flat_id: 1}}}/>)
  wrapper.setState({newItem: {item: 'avocado'}})
  wrapper.find('form').simulate('submit')
  // t.is(wrapper.state().newItem.item, 'avocado')
})
