
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo_tag', function(table){
    table.increments();
    table.timestamps();
    table.integer('todo_id').unsigned().references('id').inTable('todo').onDelete('cascade');
    table.integer('tag_id').unsigned().references('id').inTable('tag').onDelete('cascade');
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todo_tag');
};
