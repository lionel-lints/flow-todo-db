exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo', function(table){
    table.increments();
    table.timestamps();
    table.integer('user_id').unsigned().references('id').inTable('todo').onDelete('cascade');
    table.text('title');
    table.text('description').defaultTo('');
    table.datetime('due_at');
    table.boolean('complete').defaultTo(false);
  }); 
};

module.exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE todo_id_seq restart with 9;').then(function () {
    return Promise.join(
      knex('todo').del(),
      knex('todo').insert({
        id: 1,
        user_id: 1,
        title: 'clean house',
        description: 'mop the kitchen, sweep the floor.',
        due_at: new Date().now,
        complete: false
      }),
      knex('todo').insert({
        id: 2,
        user_id: 1,
        title: 'clean house',
        description: 'mop the kitchen, sweep the floor.',
        due_at: new Date().now,
        complete: false
      }),
      knex('todo').insert({
        id: 3,
        user_id: 1,
        title: 'clean house',
        description: 'mop the kitchen, sweep the floor.',
        due_at: new Date().now,
        complete: false
      }),
      knex('todo').insert({
        id: 4,
        user_id: 1,
        title: 'clean house',
        description: 'mop the kitchen, sweep the floor.',
        due_at: new Date().now,
        complete: false
      }),
      knex('todo').insert({
        id: 5,
        user_id: 1,
        title: 'clean house',
        description: 'mop the kitchen, sweep the floor.',
        due_at: new Date().now,
        complete: false
      }),
      knex('todo').insert({
        id: 6,
        user_id: 1,
        title: 'clean house',
        description: 'mop the kitchen, sweep the floor.',
        due_at: new Date().now,
        complete: false
      }),
      knex('todo').insert({
        id: 7,
        user_id: 1,
        title: 'clean house',
        description: 'mop the kitchen, sweep the floor.',
        due_at: new Date().now,
        complete: false
      }),
      knex('todo').insert({
        id: 8,
        user_id: 1,
        title: 'clean house',
        description: 'mop the kitchen, sweep the floor.',
        due_at: new Date().now,
        complete: false
      }),
      knex('todo').insert({
        id: 9,
        user_id: 1,
        title: 'clean house',
        description: 'mop the kitchen, sweep the floor.',
        due_at: new Date().now,
        complete: false
      }),
      knex('todo').insert({
        id: 10,
        user_id: 1,
        title: 'clean house',
        description: 'mop the kitchen, sweep the floor.',
        due_at: new Date().now,
        complete: false
      })
    );
  });
};
