# Todo-List from (almost) scratch.

## Set-up:
- Fork/clone this repo (https://github.com/DianaVashti/todo-project-for-sabrin)
- $`npm i`
- $`npm run db:create`
- $`npm run db:create_test`
  - To run tests run $`npm run test`

## Specs

### Front-End:
- [ ] Uses EJS or PUG for HTML templates. (EJS recommended)
- [ ] App Has two views.
  - [ ] View 1: Home.
    - [ ] Home shows all non-completed todos.
    - [ ] Each non-completed todo has a link that you can click to `complete` the todo.
    - [ ] This page as a form to add a new todo.
  - [ ] View 2: Completed.
    - [ ] Completed shows all completed todos.


### Middlewares:
- [ ] App uses express.
- [ ] There is only one routes file.
- [ ] The `complete` functionality has the path `/complete` & is a POST route that redirects to `/`.
- [ ] The `Add new todo` functionality has the path `/add` & is a POST route that redirects to `/`.
- [ ] GET `/` renders the home page with all un-completed todos.
- [ ] GET `/complete` renders the completed page with all completed todos.


### Back-End:
- [ ] App uses a postgreSQL db.
- [ ] App uses pg-promise.
- [ ] db functions live in the actions folder (can be 1 file or 4 separate, your choice)
  - [ ] There is a function that gets all un-completed todos called `getAllTodos`.
  - [ ] There is a function that gets all completed todos called `getCompletedTodos`.
  - [ ] There is a function that marks a todo as completed called `completeOneTodo`.
  - [ ] There is a function that adds a new todo called `addOneTodo`.
- [ ] There is a `schema.sql` file and the schema is only one table called `todos`.
  - [ ] `todos` table stores todo `description` & `is_completed` (BOOLEAN), as well as a serialized `id`.


### Testing:
- [ ] There is at least one test, which tests at least one of the db functions (`addTodo`, `completeTodo`, `getCompletedTodods` or `getAllTodos`)
- [ ] Uses Mocha/Chai.


### Notes:
- in the app.js file you need to uncomment the line regarding which view engine you choose (pug vs ejs) and then delete the corresponding files in views.
- the views files are blank so you will need to add the whole html code: including the head etc...
- The set up creates a basic as well as test database. use this to your advantage for your test (i.e. know you can delete all the data after/before each test if you want to ensure the test always tests the same thing).
- the database config is already set up for you.
