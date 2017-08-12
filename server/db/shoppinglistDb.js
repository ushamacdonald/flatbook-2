function getShoppinglistByFLatId (flat_id, db) {
  return db('shoppinglist')
    .where('flat_id', flat_id)
}

function addShoppinglistItem (data, db) {
  return db('shoppinglist')
    .insert(data)
}

module.exports = {
  getShoppinglistByFLatId,
  addShoppinglistItem
}
