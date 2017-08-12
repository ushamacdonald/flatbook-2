
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('flats', table => {
    table.increments('flat_id')
    table.string('flat_name')
    table.string('address')
    table.string('colour')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('flats')
};
