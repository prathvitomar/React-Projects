import { useSetRecoilState } from 'recoil'
import { todo } from '../atoms/todo'

function Todo({id, text}) {
    const setTodos = useSetRecoilState(todo);
    function deleteTodo(id){
        setTodos((prevTodo) => prevTodo.filter((p)=> p.id !== id));
    }

  return (
    <>
        <div key={id} style={{display:'flex', justifyContent : 'center'}}>
            <h1>{text}</h1>
            <button onClick={()=> deleteTodo(id)}>X</button>
        </div>
    </>
  )
}

export default Todo