
module.exports = {
  getEventsByFlatId: (flat_id, db) => db('events').where('flat_id', flat_id)
}
