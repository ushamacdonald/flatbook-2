import React from 'react'
import {connect} from 'react-redux'
import {postShopping} from '../actions/shopping'

class ShoppingListAdd extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        newItem: {flat_id: props.match.params.flat_id}
      }
  }

  updateItem(e) {
    let newItem = this.state.newItem
    newItem[e.target.name] = e.target.value
    this.setState({newItem})
  }

  addItem(e) {
    e.preventDefault()
    this.props.dispatch(postShopping(this.state.newItem))
  }


  render () {
    return (
      <form onSubmit={this.addItem.bind(this)}>
        <div className="field">
            <div className="control">
              <input onChange={this.updateItem.bind(this)} className="input" type="text" name="item" />
            </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="button is-primary" type="submit" value="add" />
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shopping: state.shoppinglist
}}

export default connect(mapStateToProps)(ShoppingListAdd)
