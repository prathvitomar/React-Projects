import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function useTheme() {
    const [theme, setTheme] = useState(()=>(localStorage.getItem('theme') || "light"));

    useEffect(()=>{
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute("data-theme", theme);
    },[theme])

    function toggleTheme(){
        setTheme((prev) => prev === "light" ? "dark" : "light")
    }
    return {theme, toggleTheme};
}

export default useTheme