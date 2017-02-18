
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table){
    table.increments();
    table.timestamps();
    table.text('first_name');
    table.text('last_name');
    table.text('github_id');
    table.text('avatar_url');
    table.text('email');
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
