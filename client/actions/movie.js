import request from 'superagent'

export const receiveMovie = (movie) => {
return {
  type: RECEIVE_MOVIES,
  movies: movie.map(movie => movie.data)
}
}

export function fetchMovie (search, cb) {
    request
      .get('api/movies/')
      .query({movie: search})
      .end((err, res) => {
        if (err) {console.log(err.message)}
        else {
          cb(search, res.body)
        }
      })
}
