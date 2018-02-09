const databaseName = 'todoz'
const databaseName_test = 'todoz_test'
let connectionString

if(process.env.NODE_ENV === 'development'){
  connectionString = `postgres://${process.env.USER}@localhost:5432/${databaseName}`
} else if (process.env.NODE_ENV === 'test'){
  connectionString = `postgres://${process.env.USER}@localhost:5432/${databaseName_test}`
}

// const pgp = require('pg-promise')();
// const db = pgp( connectionString );
const db = require('../database/db.js')


const getAllTodos = () => {
  return db.any(`SELECT id, description FROM todos
    WHERE is_completed = false`)
}


const getCompletedTodos = () => {
  return db.any(`SELECT * FROM
    todos WHERE is_completed = true`)

}


const completeOneTodo = (id) => {
  return db.any(`UPDATE todos
    SET is_completed = true
    WHERE id = $1
    RETURNING *`)

}

const addOneTodo = () => {
  return db.one(`INSERT INTO todos
    (description)
    VALUES
    ($1)
    RETURNING *`)
}












module.exports = { db, getAllTodos, getCompletedTodos,completeOneTodo,addOneTodo   }
