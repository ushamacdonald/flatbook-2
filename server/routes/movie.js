var router = require('express').Router()
var request = require('superagent')

router.get('/:flat_id', (req, res) => {
  request
    .get('https://simapi.p.mashape.com/m.php?')
    .set('X-Mashape-Key', '983OTIHON3mshsug4dfkMcunJMlkp1z6vAijsnRLGJotACG62p')
    .set('Accept', 'text/plain')
    .end((err, resres) => {
      if (err) {console.log(err.message)}
      else {
        res.json(resres.body)
      }
    })
})

module.exports = router
