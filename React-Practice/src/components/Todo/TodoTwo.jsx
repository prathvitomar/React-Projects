import React, { useEffect, useState } from 'react'
import TodoFormTwo from './TodoFormTwo';
import TodoItemTwo from './TodoItemTwo';
import ThemeProvideTwo from '../../context/ThemeContextTwo';

function TodoTwo() {
    const [todos, setTodos] = useState([]);

    const addTodo = (addedTodo) =>{
        setTodos((oldTodo) => [{id : Date.now(), ...addedTodo}, ...oldTodo])
    }

    const updateTodo = (id, updatedTodo) => {
        setTodos((todo)=> todo.map((oldTodo)=> oldTodo.id === id ? {todo:updatedTodo, ...oldTodo} : oldTodo))
    }

    const deleteTodo = (id) => {
        setTodos((todo)=> todo.filter((oldTodo)=> oldTodo.id !== id))
    }

    const toggleCompleted = (id) => {
        setTodos((todo)=> todo.map((oldTodo)=> oldTodo.id === id ? {completed : !oldTodo.completed, ...oldTodo} : oldTodo))
    }


    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        } else {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <ThemeProvideTwo value={{todos, addTodo, updateTodo,deleteTodo, toggleCompleted}}>
        <div className="bg-[#172842] min-h-screen py-8">
                    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                        <div className="mb-4">
                            <TodoFormTwo />
                        </div>
                        <div className="flex flex-wrap gap-y-3">
                            {todos.map((todo)=>(
                                <div key={todo.id} className='w-full'>
                                    <TodoItemTwo value={todo}/>
                                </div>
                            ))}
                        </div>
                    </div>
        </div>
        </ThemeProvideTwo>
  )
}

export default TodoTwo