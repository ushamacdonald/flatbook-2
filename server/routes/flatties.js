var router = require('express').Router()
var flattiesDb = require('../db/flattiesDb')

router.get('/:flat_id', (req, res) => {
  flattiesDb.getFlattiesByFlatId(req.params.flat_id, req.app.get('db'))
    .then(flatties => res.json(flatties))
    .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

module.exports = router
