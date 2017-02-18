
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo', function(table){
    table.increments();
    table.timestamps();
    table.integer('user_id').unsigned().references('id').inTable('user').onDelete('cascade');
    table.text('title');
    table.text('description').defaultTo('');
    table.datetime('due_at');
    table.boolean('complete').defaultTo(false);
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todo');
};
