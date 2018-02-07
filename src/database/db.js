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

const getAllTodos = () => {
  return db.any(`SELECT id, description FROM todos `,  [completed])
}


const getCompletedTodos = () => {
  return db.any(`SELECT id, description FROM
    todos`)

}


const completeOneTodo = () => {
  return db.any(`INSERT INTO todos
    (name, description)
    VALUES
    ($1, $2)
    RETURNING *`)

}

const addOneTodo = () => {
  return db.one(`INSERT INTO todos
    (name, description)
    VALUES
    ($1, $2)
    RETURNING *`)
}












module.exports = db, getAllTodos, getCompletedTodos,completeOneTodo,addOneTodo   ;
