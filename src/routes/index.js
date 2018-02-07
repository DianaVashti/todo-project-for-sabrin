// ADD CODE HERE
var express = require('express');
const bodyParser = require('body-parser')
const { getAllTodos, getCompletedTodos,completeOneTodo,addOneTodo } = require('./routes/index.js')
const app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


app.post('/complete', (request, response) => {
  const id = request.body.id
  completeOneTodo(id)
  .then((todo) => {
    response.redirect('/')
  })
})


app.post('/add', (request, response) => {
  const { name, description } = request.body
  addOneTodo(name, description)
  .then((todo) => {
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
  completeOneTodo(id)
  .then((todo) => {
    response.render('completed', { todo })
  })
  .catch((err) => {

  })
})





app.listen(3000, () =>
console.log('Example app listening on port 3000!')
