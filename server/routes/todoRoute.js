const express = require('express')
const router = express.Router()
const {allTodos, deleteTodo, addTodo, markTodo, filterTodo} = require('../controllers/todoController')

// router.get('/todos', allTodos)
router.get('/todos', filterTodo)
router.post('/todo', addTodo)
router.delete('/todos/:id', deleteTodo)
router.put('/todos/:id', markTodo)

module.exports = router;