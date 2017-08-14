import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import {getFlatties} from '../actions/flatties'
import {connect} from 'react-redux'

import Flatties from './Flatties'

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
  }

  render() {
    return (
      <div className="columns">
        <h1>{this.state.flat_id}</h1>
        <Route path='/flats/:flat_id' component={(props) => <Flatties {...props} />} />
        <div className="column">blahs</div>
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
