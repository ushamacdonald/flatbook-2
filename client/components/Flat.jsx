import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import {getFlatties} from '../actions/flatties'
import {getShopping} from '../actions/shopping'
import {connect} from 'react-redux'

import Flatties from './Flatties'
import ShoppingList from './ShoppingList'


class Flat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flat_id: props.flat_id
    }
  }
  componentWillReceiveProps(props) {
    let {flat_id} = props.match.params
    if (this.state.flat_id != flat_id) {
      this.props.dispatch(getFlatties(flat_id))
      this.setState({flat_id})
    }
  }
  componentWillMount() {
    this.props.dispatch(getFlatties(this.props.match.params.flat_id))
    this.props.dispatch(getShopping(this.props.match.params.flat_id))
  }

  render() {
    return (
      <div>
          <div className="columns">
            <div className="column"></div>
            <Route path='/flats/:flat_id' component={(props) => <Flatties {...props} />} />
            <div className="column"></div>
          </div>
          <div className="columns shopping">
          <Route exact path="/flats/:flat_id" component={(props) => <ShoppingList {...props} />} />
          </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    flatties: state.flatties
  }
}

export default connect(mapStateToProps)(Flat)
