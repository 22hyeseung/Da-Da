require('dotenv').config()

const common = {
  client: 'mysql',
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
  }
}

module.exports = {
  development: Object.assign({}, common, {
    debug: true
  }),
  production: common
};
