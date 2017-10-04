
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Lee', email: 'dog@dogs.com'},
        {id: 2, name: 'Steven', email: 'slowburn_idiot@gmail.com'},
        {id: 3, name: 'Jeff', email: 'jefferson42353252@icloud.com'}
      ]);
    });
};
