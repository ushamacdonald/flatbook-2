import React from 'react'
import {connect} from 'react-redux'
import {fetchMovie} from '../actions/movie'

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
  fetchMovie(e.target.value, this.saveResults.bind(this))
}

render() {
  console.log(this.state);
  return (
    <div>
      <h1 className="title is-3">Movie</h1>
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
    </div>
  )
}
}

export default Movie
