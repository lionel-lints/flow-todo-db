module.exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE user_id_seq restart with 5;').then(function () {
    return Promise.join(
      knex('user').del(),
      knex('user').insert({
        id: 1,
        first_name: 'CJ',
        last_name: 'Reynolds',
        email: 'cj@example.com',
        github_id: 14241866,
        avatar_url: 'https://avatars.githubusercontent.com/u/14241866?v=3'
      }),
      knex('user').insert({
        id: 2,
        first_name: 'Lionel',
        last_name: 'Lints',
        email: 'lionel@example.com',
        github_id: 13045341,
        avatar_url: 'https://avatars.githubusercontent.com/u/13045341?v=3'
      }),
      knex('user').insert({
        id: 3,
        first_name: 'Chris',
        last_name: 'Burkhart',
        email: 'chris@example.com',
        github_id: 53454,
        avatar_url: 'https://avatars.githubusercontent.com/u/53454?v=3'
      }),
      knex('user').insert({
        id: 4,
        first_name: 'Adam',
        last_name: 'Lichty',
        email: 'adam@example.com',
        github_id: 5067571,
        avatar_url: 'https://avatars.githubusercontent.com/u/5067571?v=3'
      })
    );
  });
};
