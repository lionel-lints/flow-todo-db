
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tag', function(table){
    table.increments();
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'))
    table.text('name');
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tag');
};
