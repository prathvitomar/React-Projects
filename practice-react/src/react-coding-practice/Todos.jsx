import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Todos() {
    const [data, setData] = useState([]);
    const [todoText, setTodoText] = useState("");

    useEffect(()=>{
        async function getData(){
            try {
                const allTodos = await fetch(`https://dummyjson.com/todos`)
                const res = await allTodos.json();
                setData(res.todos);
            } catch (error) {
                console.error(error)   
            }
        }
        getData();
    },[])


    async function handleAddTodo(){
        const addedTodo = await fetch(`https://dummyjson.com/todos/add`,{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                todo : todoText,
                completed : false,
                userId : 5
            })
        })
        console.log(addedTodo);
        setTodoText("");
    }

    async function handleUpdate(){
        const updatedTodo = await fetch(`https://dummyjson.com/todos/1`,{
            method : 'PUT',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                // body : 'This is Updated Todo'
                completed : false
            })
        })
    }

    async function handleDelete(){
        const deletedTodo = await fetch('https://dummyjson.com/todos/1',{
            method : 'DELETE'
        })
    }

  return (
    <>
        <h1>Todos</h1>
        <input type="text" value={todoText} onChange={(e)=> setTodoText(e.target.value)}/>
        <button disabled={!todoText} onClick={handleAddTodo}>Add Todo</button>
        <div>
            {
                data.length > 0 ? data.map((item)=> (
                    <ul key={item.id}>
                        <hr />
                        <li>{item.todo}</li>
                        <button onClick={handleDelete}>Delete Todo</button>
                        <button onClick={handleUpdate}>Update Todo</button>
                        <hr />
                    </ul>
                )) : (<h4>Loading</h4>)
            }
        </div>
    </>
  )
}

export default Todos