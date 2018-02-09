// ADD CODE HERE
var express = require('express');
var app = express()

app.post('/complete/:id', (request, response) => {
  const id = request.body.id
  completeOneTodo(id)
  .then((todo) => {
    response.redirect('/')
  })
})


app.post('/add', (request, response) => {
  const { name, description } = request.body
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
    response.render('home',{ todo })
  })
  .catch((err) => {

  })
})


app.get('/complete', (request, response) => {
  getCompletedTodos()
  .then((todo) => {
    response.render('completed', { todo })
  })
  .catch((err) => {

  })
})





module.exports = app;
