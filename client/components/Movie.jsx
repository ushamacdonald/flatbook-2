import React from 'react'
import {connect} from 'react-redux'
import {fetchMovie} from '../actions/movie'
import {HashRouter as Route, Router} from 'react-router-dom'
import jump from 'jump.js'

import MovieResults from './MovieResults'
import MovieSingleResult from './MovieSingleResult'


class Movie extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    search: '',
    movieResults: [],
    selectedResult: null,
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

selectResult(selectedResult) {
  this.setState({selectedResult})
}

render() {
  console.log(this.state.movieResults);
  return (
    <div className="container">
      <h1 className="title is-3">Movie</h1>
        <div className="field">
          <div className="control">
            <input onChange={this.newSearch.bind(this)} className="input" type="text" name="search" />
          </div>
        </div>
      <MovieResults select={this.selectResult.bind(this)} movieResults={this.state.movieResults} />
      {this.state.selectedResult &&
      <MovieSingleResult select={this.state.selectedResult} movieResults={this.state.movieResults} /> }
    </div>
  )
}
}

export default Movie
