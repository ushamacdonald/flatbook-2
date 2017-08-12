var router = require('express').Router()
var eventsDb = require('../db/eventsDb')

router.get('/:flat_id', (req, res) => {
  eventsDb.getEventsByFlatId(req.params.flat_id, req.app.get('db'))
    .then(events => res.json(events))
    .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

module.exports = router
