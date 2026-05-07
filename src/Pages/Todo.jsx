import React, { useState } from 'react'
import Form from './Form'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addTodoTo = (e) => {
    e.preventDefault()
    setTodos([...todos, { title, description }])
    setTitle('')
    setDescription('')
  }

  return (
    <>
      <Form />
      <form onSubmit={addTodoTo} style={{ marginTop: '1rem' }}>
        <input onChange={(e) => setTitle(e.target.value)} value={title} type='text' placeholder='Enter Title' />
        <input onChange={(e) => setDescription(e.target.value)} value={description} type='text' placeholder='Enter Description' />
        <button type='submit'>Add todo</button>
      </form>

      {todos.length > 0 ? (
        todos.map((item, index) => (
          <div key={index} style={{ marginTop: '1rem' }}>
            <h1>{item.title}</h1>
            <h4>{item.description}</h4>
          </div>
        ))
      ) : (
        <h2>No todos found</h2>
      )}
    </>
  )
}

export default Todo
