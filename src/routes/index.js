// ADD CODE HERE
var express = require('express');
var app = express.Router()

const { completeOneTodo, addOneTodo, getAllTodos, getCompletedTodos } = require('../actions/actions.js')

app.post('/complete/:id', (request, response) => {
  const id = request.params.id
  completeOneTodo(id)
  .then(() => {
    response.redirect('/')
  })
})


app.post('/add', (request, response) => {
  const description = request.body.description
  addOneTodo(description)
  .then(() => {
    response.redirect('/')
  })
  .catch((err) => {

  })
})


app.get('/', (request, response) => {
  getAllTodos()
  .then((todo) => {
    response.render('home', { todo })
  })
  .catch((err) => {

  })
})


app.get('/complete', (request, response) => {
  getCompletedTodos()
  .then((task) => {
    response.render('completed', { task })
  })
  .catch((err) => {

  })
})





module.exports =  app
