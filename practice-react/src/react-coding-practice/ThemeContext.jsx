import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();
function ThemeContext({children}) {
    const [theme, setTheme] = useState('light');
    function handleTheme(){
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

  return (
    <ThemeContext.Provider value={{theme, handleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext