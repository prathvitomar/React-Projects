import React, { useCallback, useState } from 'react'
import Todos from '../components/Todos';

function UseCallbackMain() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const addTodos = useCallback((todo) => {
        setTodos(prev => [todo,...prev])
    },[todos])
    console.log("Parent")
  return (
    <>
        <div>
            <Todos todos={todos} addTodos={addTodos}/>
        </div>
        <div>
            <h1>Count {count}</h1>
            <button onClick={()=> setCount(prev => prev + 1)}>Increment</button>
        </div>
    </>
  )
}

export default UseCallbackMain