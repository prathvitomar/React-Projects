import React, { useEffect, useState } from 'react'

function useTheme() {
  const [theme, setTheme] = useState(()=> localStorage.getItem('theme') || 'light');

  useEffect(()=>{
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  },[theme])

  function toggleTheme(){
    setTheme(theme === 'dark' ? 'light' : 'dark');
    console.log(theme);
  }

  return {theme, toggleTheme}

}

export default useTheme