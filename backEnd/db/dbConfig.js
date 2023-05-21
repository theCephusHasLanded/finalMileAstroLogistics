const pgp = require('pg-promise')();
const dotenv = require('dotenv');

dotenv.config();

// Let's create a connection object for our database for deployment readiness
const DATABASE_URL = process.env.DATABASE_URL;

const cn = DATABASE_URL
  ? {
      connectionString: DATABASE_URL,
      max: 30
    }
  : {
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      database: process.env.PG_DATABASE,
      user: process.env.PG_USER
    };

// To connect the promise to the database connection object, allowing us to write SQL
const db = pgp(cn);

// Now we can query!

module.exports = db;
