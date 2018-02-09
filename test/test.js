const db = ('../database/db.js')
 var expect = require('chai').expect
 const client = require('pg');

 const  { getCompletedTodos, getAllTodos } = require('../src/actions/actions.js')



describe ('getCompletedTodos', () => {
  it('gets all completed todos', () => {
   return getCompletedTodos()
    .then((tasks) => {
      console.log(tasks)
     // expect(tasks[0].is_completed).to.be.true
     // expect(tasks[1].is_completed).to.be.true
     tasks.map((task)=> {
       console.log(task)
       expect(task.is_completed).to.be.true
     })
    })

  })
})


// describe('getAllTodos', () => {
//   it('gets all incomplete todos', () => {
//     return getAllTodos()
//     .then((tasks) => {
//       console.log(tasks)
//     tasks.map((task) => {
//       console.log(task)
//       expect(task.is_completed).to.be.false
//     })
//     })
//
//   })
// })
