module.exports = {
  getFlats: db => db('flats'),
  newFlat: (flat, db) => db('flats').insert(flat)
}
