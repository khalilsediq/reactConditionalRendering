import React, { useState } from 'react'
import Card from './Components/Card'
import Users from './Pages/Users'



const App = () => {

  const [todos, setTodos] = useState([])
  const [ title , setTitle] = useState("")
  const [description , setDescription] = useState("")

    const addTodoTo = ( e ) =>{
      e.preventDefault()
      console.log(title, description);

      setTodos([...todos, {title, description}])
      


    }
  return (
    <>
    <Users/>
    <Card />
    <form onSubmit={addTodoTo} >
      <input onChange={(e)=> setTitle(e.target.value)} value={title} type="text" placeholder='Enter Title'  />
      <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder='Enter Description '  />
      <button type='submit'>Add todo </button>
    </form>


    {todos.length > 0 ? todos.map((item, index) =>{
      return <div key={index}>
        <h1>{item.title}</h1>
        <h4> {item.description} </h4>
      </div>
    } ) : <h2>No todos found</h2> }
    </>
  )
}

export default App
