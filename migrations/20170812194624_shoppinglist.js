exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('shoppinglist', function (table) {
    table.increments('shopping_id');
    table.string('item');
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.boolean('done').defaultTo(false);
    table.integer('flattie_id')
    table.integer('flat_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('shoppinglist')
};
