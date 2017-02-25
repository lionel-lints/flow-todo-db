
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo_tag', function(table){
    table.increments();
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'))
    table.integer('todo_id').unsigned().references('id').inTable('todo').onDelete('cascade');
    table.integer('tag_id').unsigned().references('id').inTable('tag').onDelete('cascade');
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todo_tag');
};
