import React from 'react'
import {connect} from 'react-redux'
import {fetchMovie} from '../actions/movie'
import {HashRouter as Route, Router} from 'react-router-dom'
import MovieResults from './MovieResults'


class Movie extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    search: 'Bee Movie',
    movieResults: []
  }
}

saveResults(search, movieResults) {
  this.setState({search, movieResults})
}

newSearch(e) {
  e.preventDefault()
  fetchMovie(e.target.value, this.saveResults.bind(this))

}

render() {
  console.log(this.state);
  return (
    <div>
      <h1 className="title is-3">Movie</h1>
      <Route exact path="/flats/:flat_id" component={(props) => <MovieResults {...props} />} />
      <form>
        <div className="field">
          <div className="control">
            <input onChange={this.newSearch.bind(this)} className="input" type="text" name="search" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="button is-primary" type="submit" value="search" />
          </div>
        </div>
      </form>
      <div className="columns">
        {this.state.movieResults.map((result, key) => {
          return <div key={key} className="column">
            {result.original_title}
          </div>
        })}
      </div>
    </div>
  )
}
}

export default Movie
