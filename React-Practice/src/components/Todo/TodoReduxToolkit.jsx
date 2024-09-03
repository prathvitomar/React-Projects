import React from 'react'
import AddTodo from './addTodo'
import ListTodo from './listTodo'

function TodoReduxToolkit() {
  return (
    <>
        <h1 className='mt-8 mb-8'>TodoReduxToolkit</h1>
            <AddTodo/>
            <ListTodo/>
    </>
  )
}

export default TodoReduxToolkit