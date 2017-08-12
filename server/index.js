var server = require('./server')

var Knex = require('knex')
var config = require('../knexfile')[process.env.NODE_ENV || 'development']

server.set('db', Knex(config))

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
