import React, { useState } from 'react'
import Square from './Square'

function TicTacToe() {
    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ]

    const [playerO, setPlayerO] = useState(true); 

    function onClick(){
        if(playerO){
            
        }
    }

  return (
    <>
        <div className='square-div' id='1'>
            <Square id={1} onClick={onClick}/>
            <Square id={2} onClick={onClick}/>
            <Square id={3} onClick={onClick}/>
        </div>
        <div className='square-div' id='2'>
            <Square id={4} onClick={onClick}/>
            <Square id={5} onClick={onClick}/>
            <Square id={6} onClick={onClick}/>
        </div>
        <div className='square-div' id='3'>
            <Square id={7} onClick={onClick}/>
            <Square id={8} onClick={onClick}/>
            <Square id={9} onClick={onClick}/>
        </div>
        <h1>It's your Turn : Player {playerO ? "O" : "X"}</h1>
    </>
  )
}

export default TicTacToe