import React, { memo } from 'react'

function Todos({ todos, addTodos}) {
  console.log("Child Rendered")
  const add = () => {
    const todo = 'New Entry ' + (todos.length + 1);
    addTodos(todo)
  }

  return (
    <>
    {
        todos.length > 0 && todos.map((todo,index)=>(
            <p key={index}>{todo}</p>
        ))
    }
    <button onClick={add}>Add Todo</button>
    </>
  )
}

export default memo(Todos)