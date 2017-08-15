import React from 'react'
import {connect} from 'react-redux'
import ShoppingListAdd from './ShoppingListAdd'
import {HashRouter as Router, Route} from 'react-router-dom'


const ShoppingList = ({shopping}) => {
    return (
      <div className="column is-half">
        <h1 className="title is-3">Shopping List</h1>
        {shopping.map((shopping, key) => {
          return <li key={key}>{shopping.item}</li>
        })}
        <Route exact path="/flats/:flat_id" component={(props) => <ShoppingListAdd {...props} />} />
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    shopping: state.shoppinglist
  }
}

export default connect(mapStateToProps)(ShoppingList)
