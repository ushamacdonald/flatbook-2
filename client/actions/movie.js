import request from 'superagent'

export const requestMovies = () => {
  return {
    type: REQUEST_MOVIES
  }
}

export const receiveMovies = (movies) => {
return {
  type: RECEIVE_MOVIES,
  movies: movies.map(movie => movie.data)
}
}

export function fetchMovie () {
  return (dispatch) => {
    request
      .get('https://simapi.p.mashape.com/m.php?')
      .set('X-Mashape-Key', '983OTIHON3mshsug4dfkMcunJMlkp1z6vAijsnRLGJotACG62p')
      .set('Accept', 'text/plain')
      .end((err, res) => {
        if (err) {console.log(err.message)}
        else {
          dispatch(receiveMovies(res.body))
        }
      })
  }
}
