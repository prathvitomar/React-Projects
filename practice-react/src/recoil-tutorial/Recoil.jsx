import { useRecoilValue } from 'recoil';
import { totalTodos } from './selectors/totalTodos';
import Todos from './Todos'

function Recoil() {
    const todoLength = useRecoilValue(totalTodos);
  return (
    <>    
        <div>
            <h1>Recoil Tutorial - Todos</h1>
            {todoLength>0 && (
                <h1>Total Todo Length : {todoLength}</h1>
                )} 
            <Todos/>
        </div>
    </>
  )
}

export default Recoil