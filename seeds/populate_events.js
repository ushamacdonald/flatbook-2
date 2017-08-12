exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {event_id: 1, title: 'Birthday Party', start:'2017-7-11', end: '2017-7-11', flat_id: 1, flattie_id: 1},
        {event_id: 2, title: 'Movie night', start: '2017-7-8', end: '2017-7-8', flat_id: 1, flattie_id: 1},
      ]);
    });
};
