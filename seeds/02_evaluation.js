module.exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE evaluation_id_seq restart with 6;').then(function () {
    return Promise.join(
      knex('evaluation').del(),
      knex('evaluation').insert({
        id: 1,
        todo_id: 1,
        energy: 4.6,
        engagement: 3.2,
        flow: true,
        notes: 'interesting, low engagement from this, good flow'
      }),
      knex('evaluation').insert({
        id: 2,
        todo_id: 3,
        energy: 4.6,
        engagement: 3.2,
        flow: true,
        notes: 'interesting, low engagement from this, good flow'
      }),
      knex('evaluation').insert({
        id: 3,
        todo_id: 5,
        energy: 4.6,
        engagement: 3.2,
        flow: true,
        notes: 'interesting, low engagement from this, good flow'
      }),
      knex('evaluation').insert({
        id: 4,
        todo_id: 8,
        energy: 4.6,
        engagement: 3.2,
        flow: true,
        notes: 'interesting, low engagement from this, good flow'
      }),
      knex('evaluation').insert({
        id: 5,
        todo_id: 10,
        energy: 4.6,
        engagement: 3.2,
        flow: true,
        notes: 'interesting, low engagement from this, good flow'
      })
    );
  });
};

