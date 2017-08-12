exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flatties').del()
    .then(function () {
      // Inserts seed entries
      return knex('flatties').insert([
        {flattie_id: 1, flat_id: 1, name:'Leah' , description:'Nana' , image:'/images/leah.png'},
        {flattie_id: 2, flat_id: 1, name:'Matt' , description:'Chill dude' , image:'/images/matt.png'},
        {flattie_id: 3, flat_id: 1, name:'Amelie' , description:'Mum' , image:'/images/amelie.png'},
        {flattie_id: 4, flat_id: 1, name:'Usha' , description:'Baby' , image:'/images/usha.png'}
      ]);
    });
};
