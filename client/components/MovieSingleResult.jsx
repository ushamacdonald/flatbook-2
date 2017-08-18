import React from 'react'
import {connect} from 'react-redux'
import jump from 'jump.js'


const MovieSingleResult = ({select, movie}) => {
return (
  <div className="singleResult columns">
    <div className="column is-half is-offset-one-quarter has-text-centered">
      <h1 className="title is-3">{select.original_title}</h1>
      <img src={`http://image.tmdb.org/t/p/w185/${select.backdrop_path}`} />
      <p>{select.overview}</p>
      <button className="button is-primary">Add to watchlist</button>
    </div>
  </div>
)
}

export default connect()(MovieSingleResult)
