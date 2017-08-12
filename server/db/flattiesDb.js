function getFlattiesByFlatId (flat_id, db) {
  return db('flatties')
    .where('flat_id', flat_id)
}

module.exports = {
  getFlattiesByFlatId
}
