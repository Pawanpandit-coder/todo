const Todo = require('../models/todoModel')

const allTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)

    } catch (err) {
        res.status(500).json({ message: 'failed to fetch' })
    }

}

const deleteTodo = async (req, res) => {
    const { id } = req.params
    try {
        const deletedTodo = await Todo.findByIdAndDelete(id)

        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json({ message: "Successfully deleted" })

    } catch (err) {
        res.status(500).json({ message: 'Failed to delete' })
    }
}

const addTodo = async (req, res) => {
    const { title, completed } = req.body;

    try {
        const newTodo = await Todo.create({ title, completed })
        res.status(200).json(newTodo)

    } catch (err) {
        res.status(500).json({ message: 'something wrong to add todo' })
    }
}

const markTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findById(id)

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found.' })
        }

        todo.completed = !todo.completed
        await todo.save()

        res.status(200).json({ message: 'marked todo successfully' })

    } catch (err) {
        res.status(500).json({ message: 'Failed to mark' })
    }
}


const filterTodo = async (req, res) => {
    const { filter } = req.query
    try {
        let query = {}
        if (filter === 'completed') {
            query.completed = true;
        } else if (filter === 'pending') {
            query.completed = false;
        }else{
            query.completed;
        }
        const filteredItems = await Todo.find(query)
        res.status(200).json(filteredItems)

    } catch (err) {
        res.status(200).json({ message: 'Failed to fetch filtered items' })
    }

}

module.exports = { allTodos, deleteTodo, addTodo, markTodo, filterTodo }