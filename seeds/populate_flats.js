
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flats').del()
    .then(function () {
      // Inserts seed entries
      return knex('flats').insert([
        {flat_id: 1, flat_name: 'island babes', address: '1/7 Trent St, Island Bay', colour: 'pink'}
      ]);
    });
};
