var router = require('express').Router()
var request = require('superagent')

router.get('/', (req, res) => {
  request
    .get('https://api.themoviedb.org/3/search/movie')
    .query({
      // with_genres: 18,
      query: req.query.movie || 'bee movie',
      api_key: 'nope',
      language: "en-US"
    })
    .end((err, response) => {
      // console.log(res.body);
      console.log({err, res: response.body.results});
      res.json(response.body.results)
    })
})

//image base http://image.tmdb.org/t/p/w185/ + movie.poster_path

module.exports = router
