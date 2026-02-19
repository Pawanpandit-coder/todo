import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { FaTrash, FaSlidersH } from 'react-icons/fa'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  const apiurl = import.meta.env.VITE_API_URL



  useEffect(() => {
    filterItem(filter)
  }, [])



  // fetched all todos without filter function 

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${apiurl}/api/todos`, { timeout: 5000 })
      setTodos(response.data)

    } catch (err) {
      console.error('Error is: ', err)
    }
  }




  const addTodo = async () => {
    if (todo.trim() === '') {
      setTodo('')
      return alert('Invalid Todo')
    }
    try {
      await axios.post(`${apiurl}/api/todo`, {
        title: todo,
        completed: false
      })

      setTodo('')
      filterItem(filter)

    } catch (err) {
      console.error(err)
    }
  }



  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${apiurl}/api/todos/${id}`)
      filterItem(filter)
    } catch (err) {
      console.error('Error', err)
    }
  }



  const markTodo = async (id) => {
    try {
      await axios.put(`${apiurl}/api/todos/${id}`)
      filterItem(filter)

    } catch (err) {
      console.error('Error:', err)
    }
  }



  const applyFilter = (e) => {
    const tempFilter = e.target.value
    setFilter(tempFilter)
    filterItem(tempFilter)
  }


  const filterItem = async (filter) => {
    try {
      const response = await axios.get(`${apiurl}/api/todos`, {
        params: {
          filter: filter
        }
      })
      setTodos(response.data)
    } catch (err) {
      console.error('Error', err)
    }
  }



  return (
    <div className='border py-4 rounded bg-gray-800'>
      <h1 className='text-2xl'>To do Application</h1>
      <div>
        <input type="text" name="task" id="task" className='border m-2 rounded px-1 py-1' value={todo} onChange={(e) => setTodo(e.target.value)} onKeyDown={(e) => (e.key === 'Enter') ? addTodo() : null} />
        <button className='m-2 border px-2 py-1 rounded' onClick={addTodo}>Add Task</button>
      </div>
      <div className='flex justify-between gap-2 item-center px-8 my-1 py-2 bg-gray-600'>
        <select name="mask" id="mask" className='border' value={filter} onChange={applyFilter}>
          <option value="all" className='text-black'>All</option>
          <option value="pending" className='text-black'>Pendings</option>
          <option value="completed" className='text-black'>Completed</option>
          {/* <option value="deleted" className='text-black'>Deleted</option> */}
        </select>
        <FaSlidersH />
      </div>
      <div>
        <ul className='flex flex-col justify-center items-start mx-6 my-2 gap-1'>
          {todos.map((todo) => (
            <li className='flex justify-between w-full items-center' key={todo._id}>
              <div onClick={() => markTodo(todo._id)}>
                <input type="checkbox" name="chktodo" id="chktodo" className='w-5 scale-150 mx-1' checked={todo.completed} />
                {todo.completed ? <del>{todo.title}</del> : <span >{todo.title}</span>}
              </div>
              <div>
                <FaTrash className="text-white" onClick={() => deleteTodo(todo._id)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App

