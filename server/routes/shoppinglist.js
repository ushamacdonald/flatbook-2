var router = require('express').Router()
var shoppinglistDb = require('../db/shoppinglistDb')

router.get('/:flat_id', (req, res) => {
  shoppinglistDb.getShoppinglistByFLatId(req.params.flat_id, req.app.get('db'))
    .then(shoppinglist => res.json(shoppinglist))
    .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

module.exports = router
