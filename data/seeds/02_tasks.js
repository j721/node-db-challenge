
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {tasks_name: 'make food', description: "eat food", notes: "sandwich", project_id: 1, completed: false}
      ]);
    });
};
