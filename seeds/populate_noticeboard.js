exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('noticeboard').del()
    .then(function () {
      // Inserts seed entries
      return knex('noticeboard').insert([
        {notice_id: 1, message: 'juna stole all the bread', flattie_id: 1, flat_id: 1, is_alert: true},
        {notice_id: 2, message: 'movie night on thursday', flattie_id: 2, flat_id: 1},
        {notice_id: 3, message: 'this is a message', flattie_id: 3, flat_id: 1}
      ]);
    });
};
