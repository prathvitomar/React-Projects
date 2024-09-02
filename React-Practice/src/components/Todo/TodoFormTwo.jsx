import React, { useState } from 'react'
import useThemeTwo from '../../context/ThemeContextTwo';

function TodoFormTwo() {
    const [todo, setTodo] = useState({});
    const {addTodo} = useThemeTwo();

    const handleSubmit = () =>{
        if (!todo) return
        addTodo({todo, completed : false});
        setTodo("");
    }

    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            handleSubmit();
        }}  className="flex">
            <input
                type="text"
                value={todo}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=> setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoFormTwo