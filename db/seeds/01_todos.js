
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, title: 'wash dishes', completed: false},
        {id: 2, title: 'wash dog', completed: true},
        {id: 3, title: 'go for a run', completed: true},
        {id: 4, title: 'eat the soup', completed: false},
        {id: 5, title: 'watch Shameless', completed: false},
        {id: 6, title: 'Workout', completed: true}
      ]);
    });
};
