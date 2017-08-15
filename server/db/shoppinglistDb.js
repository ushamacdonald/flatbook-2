function getShoppinglistByFLatId (flat_id, db) {
  return db('shoppinglist')
    .where('flat_id', flat_id)
}

function addShoppinglistItem (db, data) {
  return db('shoppinglist')
    .insert(data)
    .then((id) => {
      return db('shoppinglist')
        .where('shopping_id', id[0]).first()
    })
  }

module.exports = {
  getShoppinglistByFLatId,
  addShoppinglistItem
}
