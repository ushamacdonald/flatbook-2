var router = require('express').Router()
var noticeboardDb = require('../db/noticeboardDb')

router.get('/:flat_id', (req, res) => {
  noticeboardDb.getNoticesByFLatId(req.params.flat_id, req.app.get('db'))
    .then(notices => res.json(notices))
    .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

router.post('/', (req, res) => {
  req.body.notice_id = 1
  noticeboardDb.addNoticeboardMessage(req.app.get('db'), req.body)
    .then(noticeboard => res.json(noticeboard))
    .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
})

module.exports = router
