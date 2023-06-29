module.exports = {
  development: {
    database: 'person',
    username: 'postgres',
    password: 'postgres',
    host: 'localhost',
    dialect: 'postgres',
  },
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
};