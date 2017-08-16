function getNoticesByFLatId (flat_id, db) {
  return db('noticeboard')
    .where('flat_id', flat_id)
}

function addNoticeboardMessage (db, data) {
  return db('noticeboard')
    .insert(data)
    .then((id) => {
      return db('noticeboard')
        .where('notice_id', id[0]).first()
    })
}

module.exports = {
  getNoticesByFLatId,
  addNoticeboardMessage
}
