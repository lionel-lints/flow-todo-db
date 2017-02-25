
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'))
    table.text('first_name');
    table.text('last_name');
    table.text('github_id');
    table.text('avatar_url');
    table.text('email');
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
