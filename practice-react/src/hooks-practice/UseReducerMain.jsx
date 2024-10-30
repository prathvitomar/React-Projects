import React, { useReducer } from "react";

function UseReducerMain() {
  const initialState = {
    count: 0,
    increment: 2,
    decrement: 2,
  };
  const countFunc = (state, action) => {
    switch (action.type) {
        case 'increment': {
            return {
                ...state,
                count : state.count + state.increment
            }
        }
        case 'decrement': {
            if(state.count <= 0){
                return {
                    ...state,
                    count : 0
                }
                
            }
            return {
                ...state,
                count : state.count - state.decrement
            }
        }
        case 'reset' : {
            return {
                ...state,
                count : 0
            }
        }
    }
  };
  const [state, dispatch] = useReducer(countFunc, initialState);
  console.log("Component Rendered")

  return (
    <>
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=> dispatch({type : 'increment'})}>Increment</button>
        <button onClick={()=> dispatch({type : 'decrement'})}>Decrement</button>
        <button onClick={()=> dispatch({type : 'reset'})}>Reset</button>
    </div>
    </>
  )
}

export default UseReducerMain;