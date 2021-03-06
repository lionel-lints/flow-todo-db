// Update with your config settings.

require('dotenv').load({silent: true});

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/flow_todos'
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.RDS_HOSTNAME,
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      port: process.env.RDS_PORT,
      database: 'ebdb'
    }
  }
};
