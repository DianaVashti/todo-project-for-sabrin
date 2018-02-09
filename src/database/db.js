const databaseName = 'todoz'
const databaseName_test = 'todoz_test'
let connectionString

if(process.env.NODE_ENV === 'development'){
  connectionString = `postgres://${process.env.USER}@localhost:5432/${databaseName}`
} else if (process.env.NODE_ENV === 'test'){
  connectionString = `postgres://${process.env.USER}@localhost:5432/${databaseName_test}`
}

const pgp = require('pg-promise')();
const db = pgp( connectionString );



module.exports = db
