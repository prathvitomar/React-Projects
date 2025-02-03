import React, { useCallback, useMemo, useState } from 'react'

function Memo() {
    const [memoValue, setMemoValue] = useState(0);
    const [memoValue2, setMemoValue2] = useState(0);
    const [memoValue3, setMemoValue3] = useState(0);

    const memoFunc = useMemo(()=>{
        let count = 0;
        for (let i = 0; i < 10000000; i++) {
            count ++;
        }
        console.log('ReCalculated')
        console.log(count)
        return count;
    },[memoValue])

    const memoCallback = useCallback(()=>{
        return "Child Value Rendered"
    },[memoValue3])

  return (
    <>
        <input type="number" value={memoValue} onChange={(e)=> setMemoValue(e.target.value)}/>
        <input type="number" value={memoValue2} onChange={(e)=> setMemoValue2(e.target.value)}/>
        <input type="number" value={memoValue3} onChange={(e)=> setMemoValue3(e.target.value)}/>
        <ChildMemo memoCallback={memoCallback}/>
    </>
  )
}


function ChildMemo({memoCallback}){
    const val = memoCallback();
    console.log('Child')
    return(
        <>
            {val}
        </>
    )
}

export default Memo