var router = require('express').Router()
var flatsDb = require('../db/flatsDb')

router.get('/', (req, res) => {
  flatsDb.getFlats(req.app.get('db'))
    .then(flats => res.json(flats))
    .catch(err => res.status(500).send(err.message + ' server error'))
})

router.post('/', (req, res) => {
  flatsDb.newFlat(req.body, req.app.get('db'))
    .then(flat_id => res.sendStatus(201))
    .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

module.exports = router
