const db = require('../database/db.js')


const getAllTodos = () => {
  return db.any(`SELECT * FROM todos
    WHERE is_completed = false`)
}


const getCompletedTodos = () => {
  return db.any(`SELECT * FROM
    todos WHERE is_completed = TRUE`)

}


const completeOneTodo = (id) => {
  return db.one(`UPDATE todos
    SET is_completed = true
    WHERE id = $1
    RETURNING *`)

}

const addOneTodo = () => {
  return db.one(`INSERT INTO todos
    (description)
    VALUES($1)
    RETURNING *`)
}












module.exports = { getAllTodos, getCompletedTodos,completeOneTodo,addOneTodo   }
