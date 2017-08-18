
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('movies', table => {
    table.increments('movie_id')
    table.integer('api_id')
    table.string('title')
    table.string('description')
    table.string('poster_image')
    table.string('back_image')
    table.integer('vote_avg')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movies')
};
