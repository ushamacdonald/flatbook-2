exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('flatties', function (table) {
    table.increments('flattie_id');
    table.string('name');
    table.string('description');
    table.string('image');
    table.boolean('at_home').defaultTo(true);
    table.integer('flat_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('flatties')
};
