
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tag', function(table){
    table.increments();
    table.timestamps();
    table.text('name');
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tag');
};
