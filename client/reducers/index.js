import {combineReducers} from 'redux'

import flats from './flats'
import flatties from './flatties'
import shoppinglist from './shoppinglist'

export default combineReducers({
  flats,
  flatties,
  shoppinglist
})
