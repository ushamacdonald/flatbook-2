exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoppinglist').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoppinglist').insert([
        {shopping_id: 1, item: 'milk', flattie_id: 1, flat_id: 1},
        {shopping_id: 2, item: 'bananas', flattie_id: 4, flat_id: 1},
        {shopping_id: 3, item: 'toilet paper', flattie_id: 1, flat_id: 1},
        {shopping_id: 4, item: 'bread', flattie_id: 2, flat_id: 1},
      ]);
    });
};
