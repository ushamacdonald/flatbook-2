import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import {createStore} from 'react-redux'

import App from '../../client/components/App'
import './setup-dom'

App.prototype.componentDidMount = () => {}

test.skip('Hello World renders on App', t => {
  const store = createStore((state) => state)
  const wrapper = shallow(<App store={store}/>)
  t.is(wrapper.find('h1').text(), 'Hello World')
})
