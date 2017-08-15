import React from 'react'
import {connect} from 'react-redux'

const ShoppingList = ({shopping}) => {
    return (
      <div className="column">
        <h1 className="title is-3">Shopping List</h1>
        {shopping.map((shopping, key) => {
          return <li>{shopping.item}</li>
        })}
      </div>
    )
}

const mapStateToProps = (state) => {
  console.log(state.shoppinglist);
  return {
    shopping: state.shoppinglist
  }
}

export default connect(mapStateToProps)(ShoppingList)
