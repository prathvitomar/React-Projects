import React from 'react'
import { useState } from 'react'
import './styles.css'

function MainTheme() {
    const [theme, setTheme] = useState('light');
    function toggleTheme() {
        setTheme(theme === 'light'?'dark': 'light');
    }

  return (
    <>
    <div className='div-page'>
        <div className={`div-size ${theme}`}>
            <button onClick={toggleTheme}>Current Theme : {theme}</button>
            <h1>This is Theme Box</h1>
        </div>
    </div>
    </>
  )
}

export default MainTheme