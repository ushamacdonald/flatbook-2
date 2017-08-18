import React from 'react'
import {connect} from 'react-redux'

const MovieResults = ({movieResults}) => {
  return (
    <div className="columns movieResults">
      {movieResults.slice(0, 5).map((result, key) => {
        return <div key={key} className="column box is-centered">
          <h1 className="title is-4">{result.original_title}</h1>
          <img src={`http://image.tmdb.org/t/p/w185/${result.poster_path}`} />
        </div>
      })}
    </div>

  )
}



export default connect()(MovieResults)
