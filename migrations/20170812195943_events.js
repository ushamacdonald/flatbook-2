exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('events', function (table) {
    table.increments('event_id');
    table.string('title');
    table.string('start');
    table.string('end')
    table.integer('flattie_id')
    table.integer('flat_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('events')
};
