// var moment = require('moment')

// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

// function sayHi() {
//     console.log('hi')
// }

// setTimeout(sayHi, 3000)

todos = []

function getTodos(callback) {
    setTimeout(callback(returnTodos), 3000)
}

function returnTodos() {
    return ['clean garage', 'take out trash']
}

function setTodos() {
    retrievedTodos = getTodos(function() {})
    todos = retrievedTodos
    console.log('todos: ', todos)
}

setTodos()