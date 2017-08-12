exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('noticeboard', function (table) {
    table.increments('notice_id');
    table.string('message');
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.integer('flattie_id');
    table.integer('flat_id');
    table.boolean('is_alert').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('noticeboard')
};
