import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Flats from './Flats'
import Flat from './Flat'
import Flatties from './Flatties'
import {connect} from 'react-redux'
import {getFlats} from '../actions/flats'


class App extends React.Component  {
  componentDidMount() {
    this.props.dispatch(getFlats())
  }

  render() {
    return(
      <Router>
        <div className='app-container'>
          <h1>Flat Book</h1>
          <Route exact path="/" component={Flats} />
          <Route exact path="/flats/:flat_id" component={(props) => <Flat {...props} />} />
        </div>
      </Router>
    )
    }
  }



export default connect()(App)
