
module.exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE todo_tag_id_seq restart with 16;').then(function () {
    return Promise.join(
      knex('todo_tag').del(),
      knex('todo_tag').insert({
        id: 1,
        todo_id: 1,
        tag_id: 1
      }),
      knex('todo_tag').insert({
        id: 2,
        todo_id: 1,
        tag_id: 3
      }),
      knex('todo_tag').insert({
        id: 3,
        todo_id: 1,
        tag_id: 10
      }),
      knex('todo_tag').insert({
        id: 4,
        todo_id: 2,
        tag_id: 5
      }),
      knex('todo_tag').insert({
        id: 5,
        todo_id: 2,
        tag_id: 2
      }),
      knex('todo_tag').insert({
        id: 6,
        todo_id: 2,
        tag_id: 6
      }),
      knex('todo_tag').insert({
        id: 7,
        todo_id: 2,
        tag_id: 13
      }),
      knex('todo_tag').insert({
        id: 8,
        todo_id: 2,
        tag_id: 15
      }),
      knex('todo_tag').insert({
        id: 9,
        todo_id: 9,
        tag_id: 13
      }),
      knex('todo_tag').insert({
        id: 10,
        todo_id: 8,
        tag_id: 10
      }),
      knex('todo_tag').insert({
        id: 11,
        todo_id: 8,
        tag_id: 3
      }),
      knex('todo_tag').insert({
        id: 12,
        todo_id: 6,
        tag_id: 7
      }),
      knex('todo_tag').insert({
        id: 13,
        todo_id: 6,
        tag_id: 11
      }),
      knex('todo_tag').insert({
        id: 14,
        todo_id: 4,
        tag_id: 15
      }),
      knex('todo_tag').insert({
        id: 15,
        todo_id: 5,
        tag_id: 2
      })
    );
  });
};
