import React from 'react'
import {connect} from 'react-redux'

const ShoppingList = ({shopping}) => {
    return (
      <div className="column is-half">
        <h1 className="title is-3">Shopping List</h1>
        {shopping.map((shopping, key) => {
          return <li key={key}>{shopping.item}</li>
        })}
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    shopping: state.shoppinglist
  }
}

export default connect(mapStateToProps)(ShoppingList)
