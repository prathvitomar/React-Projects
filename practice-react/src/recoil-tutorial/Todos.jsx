import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { todo } from './atoms/todo';
import Todo from './Todo';

function Todos() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useRecoilState(todo)

    function addTodo(){
        setTodos((prev)=> [...prev, {id: Date.now(), text : input}])
        setInput("");
    }

    function clearTodo(){
        setInput("");
    }

    console.log(todos)

  return (
    <>
        <div>
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
            <button onClick={clearTodo}>Clear</button>
            {
                todos.map((t)=>(
                    <Todo key={t.id} id={t.id} text={t.text}/>
                ))
            }
        </div>
    </>
  )
}

export default Todos