import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../../features/todo/todoSlice';

function ListTodo() {
  const [input, setInput] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const todos = useSelector(state => state.todos);
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();
  const editRef = useRef(null);

    const handleEditClick = (todo) => {
      setIsEditable(true);
      setEditId(todo.id); 
      setInput(todo.text); 
      setTimeout(() => {
        editRef.current.focus(); 
      }, 0);
    };


    const handleSave = (todoId) => {
      dispatch(updateTodo({ id: todoId, text: input })); 
      setIsEditable(false); 
      setEditId(null); 
      setInput(""); 
  };
  
    return (
      <>
        <div>Todos</div>
        <ul className="list-none">
          {todos.map((todo) => (
            <li
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
              key={todo.id}
            >
              <input
                className="text-white bg-zinc-800"
                type="text"
                value={editId === todo.id ? input : todo.text}
                onChange={(e) => setInput(e.target.value)}
                disabled={editId !== todo.id}
                ref={editRef}
              />
              <div className="space-x-2">
                {editId === todo.id ? (
                  <button
                    onClick={() => handleSave(todo.id)}
                    className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditClick(todo)}
                    className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 3.487a2.121 2.121 0 013.001 3.001L8.37 18.001l-4.12.93a.75.75 0 01-.904-.903l.93-4.12 11.585-11.585zm2.238-2.239a3.621 3.621 0 00-5.122 0L4.818 10.41a.75.75 0 00-.196.34l-1.2 5.316a.75.75 0 00.904.904l5.316-1.2a.75.75 0 00.34-.196l9.16-9.16a3.621 3.621 0 000-5.122z"
                      />
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
  

export default ListTodo