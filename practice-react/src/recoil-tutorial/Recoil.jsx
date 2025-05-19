import { useRecoilValue } from 'recoil';
import { totalTodos } from './selectors/totalTodos';
import Todos from './components/Todos'
import Login from './components/Login';

function Recoil() {
    const todoLength = useRecoilValue(totalTodos);
  return (
    <>    
        <div>
            {/* <h1>Recoil Tutorial - Todos</h1>
            {todoLength>0 && (
                <h1>Total Todo Length : {todoLength}</h1>
                )} 
            <Todos/> */}
            <Login/>
        </div>
    </>
  )
}

export default Recoil