
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo', function(table){
    table.increments();
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'))
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
    table.text('title');
    table.text('description').defaultTo('');
    table.datetime('due_at');
    table.boolean('complete').defaultTo(false);
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todo');
};
