var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/flats', require('./routes/flats'))
server.use('/api/flatties', require('./routes/flatties'))
server.use('/api/shoppinglist', require('./routes/shoppinglist'))
server.use('/api/events', require('./routes/events'))
server.use('/api/noticeboard', require('./routes/noticeboard'))
server.use('/api/movies', require('./routes/movie'))

module.exports = server
