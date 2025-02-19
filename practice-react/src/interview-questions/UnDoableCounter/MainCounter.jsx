import React, { useState } from 'react'
import "./counter.css"
function MainCounter() {
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([]);
    const [redoList, setRedoList] = useState([]);
  
    function handleUndo(){
        const lastItem = history[history.length - 1];
        setHistory(prev => prev.filter(item => item !== lastItem))
        setResult(lastItem.currentValue);
        setRedoList(prev => [...prev, lastItem]);
    }

    function handleRedo(){
        const lastItem = redoList[redoList.length - 1];
        setHistory(prev => [...prev, lastItem]);
        setRedoList(prev => prev.filter(item => item !== lastItem))
        setResult(lastItem.nextValue);
    }

    function maintianHistory(action, currentValue, nextValue){
        const obj = {
            action,
            currentValue,
            nextValue
        }
        setHistory(prev => [...prev, obj]);
        setResult(nextValue);
    }

    function handleOperations(value){
        const action = value;
        const currentValue = result;
        const nextValue = currentValue + value;
        maintianHistory(action, currentValue, nextValue);
    }
  
    return (
    <>
        <div>
            <div>
                <h1>UnDoable Counter</h1>
            </div>
            <div style={{
                display : 'flex',
                justifyContent : 'center',
            }}>
                <button disabled={history.length === 0} onClick={handleUndo}>Undo</button>
                <button disabled={redoList.length === 0} onClick={handleRedo}>Redo</button>
            </div>

            <div style={{
                display : 'flex',
                justifyContent : 'center',
            }}>
            <div style={{
                display : 'flex',
                justifyContent : 'center',
            }}>
                <button onClick={()=> handleOperations(-100)}>-100</button>
                <button onClick={()=> handleOperations(-10)}>-10</button>
                <button onClick={()=> handleOperations(-1)}>-1</button>
            </div>
            <div>
                <h1>{result}</h1>
            </div>
            <div style={{
                display : 'flex',
                justifyContent : 'center',
            }}>
                <button onClick={()=> handleOperations(+1)}>+1</button>
                <button onClick={()=> handleOperations(+10)}>+10</button>
                <button onClick={()=> handleOperations(+100)}>+100</button>
            </div>
        </div>  
            <div style={{
                display : 'flex',
                justifyContent : 'center',
                flexDirection : 'column',
                alignItems : 'center'
            }}>
                <h1>History</h1>
                <div style={{
                    border : '1px solid black',
                    height : '500px',
                    width : '300px',
            }}>
                    {
                        history.length > 0 && history.map((item,index)=>(
                            <div key={index}>
                                <li>{item.action} :- {item.currentValue} = {item.nextValue}</li>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default MainCounter