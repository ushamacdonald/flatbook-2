import React from 'react'
import {connect} from 'react-redux'
import {fetchMovie} from '../actions/movie'
import {HashRouter as Route, Router} from 'react-router-dom'
import MovieResults from './MovieResults'
import jump from 'jump.js'


class Movie extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    search: 'Bee Movie',
    movieResults: [],
    timeoutJump: false,
  }
}

saveResults(search, movieResults) {
  if (this.state.search == '') this.setState({movieResults: []})
  else {
    this.setState({search, movieResults})
    if (!this.state.timeoutJump) {
      jump('.movieResults')
      this.setState({timeoutJump: true})
      setTimeout(() => this.setState({timeoutJump: false}), 3000)
    }
  }
}

newSearch(e) {
  this.setState({search: e.target.value})
  if (e.target.value == false) this.setState({movieResults: []})
  else fetchMovie(e.target.value, this.saveResults.bind(this))
}

render() {
  return (
    <div className="container">
      <h1 className="title is-3">Movie</h1>
        <div className="field">
          <div className="control">
            <input onChange={this.newSearch.bind(this)} className="input" type="text" name="search" />
          </div>
        </div>
      <MovieResults movieResults={this.state.movieResults} />
    </div>
  )
}
}

export default Movie
