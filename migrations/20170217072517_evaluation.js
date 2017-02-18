
exports.up = function(knex, Promise) {
  return knex.schema.createTable('evaluation', function(table){
    table.increments();
    table.timestamps();
    table.integer('todo_id').unsigned().references('id').inTable('todo').onDelete('cascade');
    table.float('energy');
    table.float('engagement');
    table.boolean('flow').defaultTo(false);
    table.text('notes').defaultTo('');
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('evaluation');
};
