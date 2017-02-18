
module.exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE tag_id_seq restart with 16;').then(function () {
    return Promise.join(
      knex('tag').del(),
      knex('tag').insert({
        id: 1,
        name: 'house'
      }),
      knex('tag').insert({
        id: 2,
        name: 'email'
      }),
      knex('tag').insert({
        id: 3,
        name: 'cleaning'
      }),
      knex('tag').insert({
        id: 4,
        name: 'job'
      }),
      knex('tag').insert({
        id: 5,
        name: 'call'
      }),
      knex('tag').insert({
        id: 6,
        name: 'misc'
      }),
      knex('tag').insert({
        id: 7,
        name: 'writing'
      }),
      knex('tag').insert({
        id: 8,
        name: 'exercise'
      }),
      knex('tag').insert({
        id: 9,
        name: 'social'
      }),
      knex('tag').insert({
        id: 10,
        name: 'urgent'
      }),
      knex('tag').insert({
        id: 11,
        name: 'project'
      }),
      knex('tag').insert({
        id: 12,
        name: 'next'
      }),
      knex('tag').insert({
        id: 13,
        name: 'work'
      }),
      knex('tag').insert({
        id: 14,
        name: 'personal'
      }),
      knex('tag').insert({
        id: 15,
        name: 'time sensitive'
      })
    );
  });
};
