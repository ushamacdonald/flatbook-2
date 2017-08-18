
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {movie_id: 1, api_id: 14160, title: 'Lock Up', description: 'Frank Leone is nearing the end of his prison term for a relatively minor crime.', poster_image: '/jZHNC2ZzhDBb1WfrFc9DSSs7449.jpg', back_image: '/cmEojt7Ykuk6p2argyu0hEDoo0d.jpg', vote_avg: 6.1 },
      ]);
    });
};
