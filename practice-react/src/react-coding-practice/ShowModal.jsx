import React, { useState } from "react";

function ShowModal() {
  const [show, setShow] = useState(false);

  const handleOutsideClick = (e)=>{
    if(e.target === e.currentTarget){
        setShow(false);
    }
  }

  return (
    <>
    {
        show ? (
            <div>
            <div onClick={(e) =>handleOutsideClick(e)} style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                <div onClick={(e) => e.stopPropagation()} style={{
                    width: '250px',
                    height: '250px',
                    border: '1px solid black',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <h1>This is Modal</h1>
                    <p>This is description</p>
                </div>
            </div>
        </div>
        ) : (<button onClick={()=>setShow(true)}>Show Modal</button>)
    }
    </>
  )
}

export default ShowModal;
